---
title: Why you should use UnoCSS instead of Tailwind
tags: [unocss, tailwind, css, webdev]
featured: true
lastUpdated: 2023-09-25T16:52:57Z
---

In this post, I will explain why you should use [UnoCSS](unocss.dev/) instead of [Tailwind](https://tailwindcss.com/).

## What is Tailwind? (For those who don't know)

Tailwind is a utility-first CSS framework. It provides you with a set of utility classes that you can use to style your website. It is very popular and is used by many developers.

```html
<div class="bg-red-500 text-white p-4 rounded-lg">This is a card</div>
```

## What is UnoCSS?

To understand what UnoCSS is, let me first explain WindiCSS. WindiCSS was a utility-first CSS framework like Tailwind. It was very similar to Tailwind, but it used just-in-time compilation to reduce the size of the CSS file and the build time.

Tailwind adopted this feature too and WindiCSS got discontinued. UnoCSS is the spiritual successor of WindiCSS. It is much more customizable than Tailwind and has a lot of features that Tailwind doesn't have.

Some of the features of UnoCSS are:

- Presets, like `preset-wind` which is similar to Tailwind
- Dark mode
- User-defined shortcuts: `btn` instead of `button`
- Extractors: For example, `attributify` lets you write `bg-red-500 text-3xl` instead of `class="bg-red-500 text-3xl"`
- Interactive Docs: You can quickly look up a class or a css property
- And many more

## How can I try it out?

- [Documentation](https://unocss.dev/)
- [Playground](https://unocss.dev/play/)
- [Integrate with your framework](https://unocss.dev/integrations/)
- [GitHub](https://github.com/unocss/unocss)
