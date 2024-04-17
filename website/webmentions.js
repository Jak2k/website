// from https://github.com/troyvassalotti/troyv.dev/blob/main/public/assets/js/web-mentions.js

/**
 * @format
 * @file web-mentions web component.
 * @typedef {"reposts" | "likes" | "bookmarks" | "replies" | "mentions"} Filter
 * @typedef {"repost-of" | "like-of" | "bookmark-of" | "in-reply-to" | "mention-of"} WebmentionType
 * @typedef {"feed" | "facepile"} Variant
 * @typedef {"ascending" | "descending"} Sort
 */

import { html, css, LitElement } from "https://esm.sh/lit@3.1.2";

function getMapKey(map, value) {
  return [...map].find(([key, val]) => val == value)[0];
}

/**
 * @element web-mentions
 * @summary A web component to display web mentions of the current URL.
 *
 * @property {boolean} expanded - State of whether all mentions are shown or if it's collapsed.
 * @property {string} domain - Domain of the page to get web mentions of. Useful for overriding localhost servers.
 * @property {string} path - URL path excluding domain to find mentions of. Defaults to the current location.
 * @property {string} feed - Webmention service feed to fetch data from. Defaults to using webmention.io.
 * @property {string} key - JSON object key whose value is the array of mentions. Defaults to "children" per webmention.io.
 * @property {Filter} filters - Space-separated list of filters for the type of webmention to show. Possible options are: likes, reposts, replies, mentions, or bookmarks.
 * @property {Variant} variant - Type of visual style to display. Best paired with individual filters.
 * @property {boolean} loadStyles - Optionally adopt minimal default styles.
 * @property {Sort} sortBy - How to sort the webmentions. Default is ascending.
 * @property {boolean} showTitle - Display an optional header for the webmentions section.
 * @property {number} previewLimit - Total number of mentions to show in the preview before hiding the rest.
 */
export default class WebMentions extends LitElement {
  static properties = {
    webmentions: { type: Array, state: true },
    filteredWebmentions: { type: Array, state: true },
    expanded: { type: Boolean, reflect: true },
    domain: { type: String },
    path: { type: String },
    feed: { type: String },
    key: { type: String },
    filters: { type: String },
    variant: { type: String, reflect: true },
    loadStyles: { type: Boolean },
    sortBy: { type: String },
    showTitle: { type: Boolean },
    previewLimit: { type: Number },
  };

  constructor() {
    super();
    this.expanded = false;
    this.domain = window.location.origin;
    this.path = window.location.pathname;
    this.feed =
      "https://webmention.io/api/mentions.jf2?token=qspyGqKi_4ivIoKre3OfwQ&target";
    this.key = "children";
    this.filters = undefined;
    this.variant = "feed";
    this.loadStyles = false;
    this.sortBy = "ascending";
    this.showTitle = false;
    this.previewLimit = 4;
  }

  static styles = css`
    web-mentions {
      display: block;
      margin-block: 2rem;

      [role="list"] {
        list-style: none;
        padding: 0;
      }

      .webmentions__header {
        margin-block-end: 1.5rem;
      }

      .webmentions__title {
        font-size: 1.5rem;
      }

      .webmentions__showAll {
        border: 1px solid currentColor;
        border-radius: 0.5em;
        color: currentColor;
        font-size: 1rem;
        padding-block: 0.5em;
        padding-inline: 1em;
      }

      .webmentions--facepile {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        row-gap: 1rem;

        .webmention {
          display: inline-flex;
        }

        .webmention:not(:first-of-type) {
          margin-inline-start: -1ch;
        }
      }

      .webmentions--feed {
        font-size: 1rem;

        > * + * {
          margin-block-start: 2em;
        }

        .webmention {
          column-gap: 1em;
          container-type: inline-size;
          display: grid;
          grid-template-columns: auto 1fr;
        }

        .webmention__header {
          align-items: center;
          display: flex;
          font-size: 1rem;
          gap: 1ch;
        }

        .webmention__meta {
          display: inline-flex;
          flex-direction: column;
          gap: 0.5em;

          > * {
            inline-size: fit-content;
          }

          time {
            font-size: 0.9rem;
          }
        }

        .webmention__content {
          grid-column: 1 / span 2;
          margin-block-start: 1em;

          @container (width > 40rem) {
            grid-column: 2;
          }
        }

        .webmention__content__reply {
          white-space: pre-line;
        }

        .webmention__content__source {
          display: inline-block;
          inline-size: 100%;
          max-inline-size: 35ch;
          min-inline-size: 15ch;
          overflow: hidden;
          text-overflow: ellipsis;
          vertical-align: bottom;
          white-space: nowrap;
        }
      }

      .webmention__author {
        block-size: 48px;
        border: 2px solid transparent;
        border-radius: 50%;
        display: inline-block;
        inline-size: 48px;

        &:hover,
        &:focus-visible {
          border-color: currentColor;
        }

        img {
          aspect-ratio: 1;
          border-radius: 50%;
          inline-size: 100%;
          object-fit: cover;
        }
      }

      .webmentions__remainingFeed > * {
        margin-block-start: 2em;
      }
    }
  `;

  static addStyles() {
    let sheet = new CSSStyleSheet();
    sheet.replaceSync(WebMentions.styles);
    document.adoptedStyleSheets.push(sheet);
  }

  /**
   * Mapping of user-input filters to their Webmention property name.
   * @type {Map<Filter, WebmentionType>}
   */
  static filterMap = new Map([
    ["reposts", "repost-of"],
    ["likes", "like-of"],
    ["bookmarks", "bookmark-of"],
    ["replies", "in-reply-to"],
    ["mentions", "mention-of"],
  ]);

  reposts = [];

  likes = [];

  bookmarks = [];

  replies = [];

  mentions = [];

  /** URL path of requested page. Defaults to using current window values but can be user-configured. */
  get currentPath() {
    return this.domain + this.path;
  }

  get apiRoute() {
    return `${this.feed}=${this.currentPath}`;
  }

  /** Validated webmention type filters supplied by the user. */
  get activeFilters() {
    if (typeof this.filters !== "string") {
      return;
    }

    let requestedFilters = this.filters.split(" ");
    let parsedFilters = requestedFilters
      .map((filter) => WebMentions.filterMap.get(filter))
      .filter((value) => value);

    return parsedFilters;
  }

  get remainingMentionsList() {
    return this.querySelector(".webmentions__remainingFeed ol");
  }

  get showAllButton() {
    return this.querySelector(".webmentions__showAll");
  }

  async fetchWebmentions() {
    try {
      let response = await fetch(this.apiRoute);
      let response2 = await fetch(this.apiRoute.slice(0, -1));
      let json = await response.json();
      let json2 = await response2.json();

      return {
        children: [...json.children, ...json2.children],
      };
    } catch (error) {
      console.error(error);
    }
  }

  async getWebmentions() {
    try {
      let mentions = await this.fetchWebmentions();
      return mentions[this.key];
    } catch (error) {
      console.error(error);
    }
  }

  createRenderRoot() {
    return this;
  }

  handleShowAll() {
    this.remainingMentionsList?.removeAttribute("style");
    this.showAllButton?.style.setProperty("display", "none");
    this.expanded = true;
  }

  filterMentions() {
    let mentions;

    if (!this.activeFilters) {
      mentions = this.webmentions;
    } else {
      mentions = this.activeFilters
        .map((filter) => this[getMapKey(WebMentions.filterMap, filter)])
        .flat(Infinity);
    }

    if (this.sortBy === "ascending") {
      return mentions.reverse();
    }

    return mentions;
  }

  /**
   * @assumes webmention.io : wm-property
   */
  static #filterMentionsByType(webmentions, filterProperty) {
    return webmentions.filter(
      (mention) => mention["wm-property"] === this.filterMap.get(filterProperty)
    );
  }

  static fireShowAllEvent() {
    this.dispatchEvent(new Event("webmentions-show-all"));
  }

  /**
   * @assumes webmention.io : wm-id
   */
  static renderAuthorProfile(webmention, useAuthorUrl = false) {
    let {
      author: { photo, name },
    } = webmention;
    let url = !useAuthorUrl ? webmention.url : webmention.author.url;

    let avatar = photo
      ? html`
          <img
            class="u-photo"
            loading="lazy"
            decoding="async"
            width="48"
            height="48"
            src="${photo}"
          />
        `
      : html`<span class="face--empty">${name.charAt(0) || "WM"}</span>`;

    return html`
      <a
        class="webmention__author h-card u-url link-u-exempt"
        href="${url}"
        id="${webmention["wm-id"]}"
        target="_blank"
        rel="noopener noreferrer"
      >
        ${avatar}
      </a>
    `;
  }

  static renderAuthorMeta(webmention) {
    let name = webmention.author.name || "Anonymous";
    let url = webmention.url;
    let date = webmention.published || webmention["wm-received"];
    let dateObject = new Date(date);

    return html`
      <div class="webmention__meta">
        <a href="${url}" class="u-url link-u-exempt p-name p-author">${name}</a>
        <time class="dt-published" datetime="${date}"
          >${dateObject.toLocaleString()}</time
        >
      </div>
    `;
  }

  /**
   * @assumes webmention.io : wm-property
   */
  static renderWebmentionContent(webmention) {
    let type = webmention["wm-property"];
    let { url, content } = webmention;

    switch (type) {
      case "like-of":
        return html`liked this:
          <a class="webmention__content__source" href="${url}">${url}</a>`;
      case "bookmark-of":
        return html`bookmarked this:
          <a class="webmention__content__source" href="${url}">${url}</a>`;
      case "in-reply-to":
        return html`
          <div class="webmention__content__reply">${content.text}</div>
        `;
      case "mention-of":
        return html`mentioned this:
          <a class="webmention__content__source" href="${url}">${url}</a>`;
      case "repost-of":
        return html`reposted this:
          <a class="webmention__content__source" href="${url}">${url}</a>`;
      default:
        return html``;
    }
  }

  static renderRemainingFeed(webmentions) {
    if (webmentions.length === 0) {
      return html``;
    }

    return html`
      <div class="webmentions__remainingFeed">
        <button
          class="webmentions__showAll"
          type="button"
          @click=${this.fireShowAllEvent}
        >
          Show all Webmentions (${webmentions.length})
        </button>
        <ol class="webmentions--feed" style="display: none;" role="list">
          ${webmentions.map(
            (mention) => html`
              <li class="webmention h-cite">
                ${WebMentions.renderAuthorProfile(mention, true)}
                <div class="webmention__header">
                  ${WebMentions.renderAuthorMeta(mention)}
                </div>
                <div class="webmention__content">
                  ${WebMentions.renderWebmentionContent(mention)}
                </div>
              </li>
            `
          )}
        </ol>
      </div>
    `;
  }

  static renderFeed(webmentions, previewLimit) {
    let previewMentions = webmentions.slice(0, previewLimit);
    let remainingMentions = webmentions.slice(previewLimit);

    return html`
      <ol class="webmentions--feed webmentions__preview" role="list">
        ${previewMentions.map(
          (mention) => html`
            <li class="webmention h-cite">
              ${WebMentions.renderAuthorProfile(mention, true)}
              <div class="webmention__header">
                ${WebMentions.renderAuthorMeta(mention)}
              </div>
              <div class="webmention__content">
                ${WebMentions.renderWebmentionContent(mention)}
              </div>
            </li>
          `
        )}
      </ol>
      ${WebMentions.renderRemainingFeed(remainingMentions)}
    `;
  }

  static renderFacepile(webmentions) {
    return html`
      <ol class="webmentions--facepile" role="list">
        ${webmentions.map(
          (mention) => html`
            <li class="webmention">${this.renderAuthorProfile(mention)}</li>
          `
        )}
      </ol>
    `;
  }

  static renderLoadingContent() {
    return html`<span>Loading webmentions...</span>`;
  }

  static renderEmptyContent() {
    return html`<span>No webmentions to display.</span>`;
  }

  /** IntersectionObserver to defer making a network request before the component is in view. */
  waitToIntersect() {
    const _intersectionObserver = (entries) => {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          this.init();
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(_intersectionObserver);
    observer.observe(this);
  }

  /** All code needed to fetch webmentions and inject them into the DOM. */
  async init() {
    this.addEventListener("webmentions-show-all", this.handleShowAll);

    this.webmentions = await this.getWebmentions();
    this.reposts = WebMentions.#filterMentionsByType(
      this.webmentions,
      "reposts"
    );
    this.likes = WebMentions.#filterMentionsByType(this.webmentions, "likes");
    this.bookmarks = WebMentions.#filterMentionsByType(
      this.webmentions,
      "bookmarks"
    );
    this.replies = WebMentions.#filterMentionsByType(
      this.webmentions,
      "replies"
    );
    this.mentions = WebMentions.#filterMentionsByType(
      this.webmentions,
      "mentions"
    );
    this.filteredWebmentions = this.filterMentions();
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.loadStyles) {
      WebMentions.addStyles();
    }

    this.waitToIntersect();
  }

  render() {
    try {
      let header = this.showTitle
        ? html`
            <div class="webmentions__header">
              <h2 class="webmentions__title">
                Webmentions
                <sup
                  ><a
                    aria-label="What are these?"
                    href="https://indieweb.org/Webmention"
                    title="What are these?"
                    >?</a
                  ></sup
                >
              </h2>
            </div>
          `
        : html``;

      if (!this.webmentions) {
        return html` ${header} ${WebMentions.renderLoadingContent()} `;
      }

      if (this.webmentions.length < 1) {
        return html` ${header} ${WebMentions.renderEmptyContent()} `;
      }

      let main;

      switch (this.variant) {
        case "facepile":
          main = WebMentions.renderFacepile(this.filteredWebmentions);
          break;
        case "feed":
        default:
          main = WebMentions.renderFeed(
            this.filteredWebmentions,
            this.previewLimit
          );
          break;
      }

      return html` ${header} ${main} `;
    } catch (error) {
      alert(error);
    }
  }
}

window.customElements.define("web-mentions", WebMentions);
