---
title: Send me semantic websites
tags: [webdev, semantics, web, css, html]
featured: true
lastUpdated: 2024-10-7T19:00:00Z
---

In the web, there are two major types of HTMl: `<div>` soups with tailwind and nice semanticaly marked up sites.

For example, a `<nav>` in a toplevel `<header>` has a *specific meaning* and a `<header` in a `<dialog>` has a completly different meaning. What these have in common, is that you could write some CSS, which is applicable to *many* websites.

```css
dialog header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

dialog footer {
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 1em;
}
```

The above code would apply to (almost) *any* dialog, which has a header and a footer. This is the power of semantics.

```html
<dialog>
    <header>
        <h1>Dialog title</h1>
        <button>Close</button>
    </header>
    <p>Dialog content</p>
    <footer>
        <button>Cancel</button>
        <button>Ok</button>
    </footer>
</dialog>
```

## Help me collect semantic websites

Please send me websites, which are semantically marked up (IndieWeb sites, Smolweb sites, your personal blog, etc.). I'll collect them here and analyze them for common patterns. After that, I'll try to write some CSS, which is applicable to *most* of these sites. The result may then do the following:

- Serve as starter styles
- Provide a theming framework
- Let people disable styles, while getting a functional & uniform look
- And more...

Please submit your website using a Webmention comment or [on Mastodon](https://mastodontech.de/@jak2k/113267076665965578).