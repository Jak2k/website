---
title: "Don't use Tailwind"
description: "Why you shouldn't use Tailwind and what you should use instead."
pubDate: "2022.6.5"
tags:
  - "css"
  - "tailwind"
  - "scss"
  - "opinion"
---

## What is Tailwind?

Tailwind is a utility first CSS framework. It's a CSS framework that doesn't have any prebuilt components. Instead, it provides you with a set of utility classes that you can use to build your own components.

```html
<div class="bg-red-500 text-white p-4 rounded-lg m-3">
  This is a Tailwind component
</div>
```

## Why you shouldn't use Tailwind

### It's harder to read and maintain

Which is easier to read? `flex min-h-screen flex-col font-mono `or`display: flex; min-heigh: 100vh; flex-direction: collumn; font-family: monospace;`? When you know tailwind, the first one is easier to read. But when you don't know tailwind, you need to dig through lot's of docs to understand what the first one means. The second one is easier to understand for everyone.

### It mixes CSS and HTML

CSS was created to seperate the styling from the content. Tailwind mixes the two together again. This makes it harder to maintain and reuse your code.

### It's a dependency

Tailwind is a dependency. Every dependency is a factor that forces your code to change. You should only use dependencies when you really need them. Tailwind is not a necessity.

## What you should use instead

## Plain CSS

You can use plain css. it's great for simple projects. It's easy to read and maintain.

### SCSS

SCSS is a CSS preprocessor. It allows you to write CSS in a more efficient way. It's easier to read and maintain than Tailwind. It also allows you to reuse your code. You can use variables, mixins and functions to reuse your code more efficiently.

```scss
$font-family: monospace;

body {
  font-family: $font-family;
}

.container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  & > * {
    margin: 1rem;
  }
}
```

## Conclusion

Tailwind is a popular tool, but causes more problems than it solves. You should use plain CSS or SCSS instead.
