---
title: Performance is Climate Protection
tags: [blog, performance, climate protection, webdev, ssg, astro, nuxt]
featured: false
lastUpdated: 2023-11-11T22:26:46Z
---

Website **performance is climate protection**. Every bit of data that is transferred over the internet consumes energy. What can you do to reduce your website's carbon footprint and what did I do to reduce mine?

## The Problem

Most websites load lots of **JavaScript**. **Most** of this **isn't really needed**. That means that the browser has to download and execute lots of code has no real benefit for the user. This is a **waste of energy**. The more energy is wasted, the more CO2 is emitted. This is bad for the climate.

Another problem are **huge images**. Most images can't even be seen in full resolution on most screens.

## The Solution

The solution is to reduce the amount of data that is transferred over the internet. This can be done by reducing the amount of JavaScript that is loaded and by reducing the size of images.

## My Blog

I used nuxt on this blog. After the inital load, nuxt hydrates the page. This means that lots of JavaScript is loaded to render the exact same page that was already rendered on the server. This is a waste of energy. I switched to [Astro](https://astro.build/). Astro is a static site generator. This means that the page is rendered on the server and then served as a static file. No JavaScript is needed to render the page. This saves lots of energy.

But even in Astro I made changes later. Initially I had enabled view-transitions. They looked really cool, but they also required JavaScript. I disabled them. Now my blog doesn't use any JavaScript at all. Just for interactive posts like [nuxt vs astro](/posts/nuxt-vs-astro) I use JavaScript.

## What you can do

- Use a **static site generator** like [Astro](https://astro.build/) when possible
- **Reduce** the amount of **JavaScript** that is loaded
- **Reduce** the **size of images** or avoid them completely (like I did on this blog)
- Use a **green hoster**
- Enable **compression** (gzip, brotli)
- Disable JavaScript in your browser (There is [NoScript](https://addons.mozilla.org/en-US/firefox/addon/noscript/) for Firefox. In Chrom(e/ium) you can disable JavaScript in the site settings).
- Use an adblocker. Ads are just unnecessary :-) (I use [uBlock Origin](https://ublockorigin.com/) which is available for all major browsers)
