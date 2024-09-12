const site = "https://jak2k.schwanenberg.name" + window.location.pathname;

const API_URL = (site) =>
  `https://webmention.io/api/mentions.jf2?target=${site}`;

const TYPES = {
  "in-reply-to": "Reply",
  "like-of": "Like",
  "repost-of": "Repost",
  "bookmark-of": "Bookmark",
  "mention-of": "Mention",
};

const TEMPLATE_AUTHOR = (author) => {
  if (author.url) return `<h3><a href="${author.url}">${author.name}</a></h3>`;

  return `<h3>${author.name}</h3>`;
};

const TEMPLATE_ENTRY = (entry) => {
  const type = TYPES[entry["wm-property"]] || entry["wm-property"];

  if (
    entry["wm-property"] === "like-of" ||
    entry["wm-property"] === "repost-of"
  ) {
    return ``;
  }

  const escapedText = entry.content?.text
    ?.replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return `<div class="comment">
      ${entry.author ? TEMPLATE_AUTHOR(entry.author) : ""}
    <p>${escapedText || "No text"}</p>
    <p><a href="${entry.url}">${type}</a> received on ${new Date(
    entry["wm-received"]
  ).toLocaleString()}</p>
  </div> `;
};

const TEMPLATE_WM = (wm) => {
  const likeCount = wm.children.filter(
    (c) => c["wm-property"] === "like-of"
  ).length;
  const repostCount = wm.children.filter(
    (c) => c["wm-property"] === "repost-of"
  ).length;

  return `
  <span class="like-count">${likeCount} Likes</span> <span class="repost-count">${repostCount} Reposts</span>
  ${wm.children.map(TEMPLATE_ENTRY).join("")}`;
};

const el = document.getElementById("wm");

// fetch the data from the url
try {
  // site without trailing slash
  const site1 = site.endsWith("/") ? site.slice(0, -1) : site;
  // site with trailing slash
  const site2 = site1 + "/";

  const data1 = await fetch(API_URL(site1)).then((res) => res.json());
  const data2 = await fetch(API_URL(site2)).then((res) => res.json());

  const data = {
    ...data1,
    children: [...data1.children, ...data2.children],
  };

  // set the innerHTML of the element to the data
  el.innerHTML = TEMPLATE_WM(data);
} catch (e) {
  console.error(e);
  el.innerHTML = "Error fetching webmentions";
}
