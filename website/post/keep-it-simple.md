---
title: Keep it simple
tags: [webdev, javascript, css, html, astro, performance]
featured: true
lastUpdated: 2023-12-8T18:10:47Z
---

To make your visitors happy, **keep your website simple**. Doing so will make your website faster, easier to use and easier to maintain. In this article, I will show my frustrations with the current state of the web and how you can **make your website simpler**.

## An example how the web is like

When you visit a news website, you are being **greeted with a pile of bloat**, that I don't care about as a visitor.

Let's take the German news website [spiegel.de](https://www.spiegel.de/) as an **example**. On a average German mobile network (slow 4G) it takes **3 seconds until you see anything**. The website is loaded after 9-12 seconds. The website is **3.3 MB** big and ads are a big part of it. 20% is from their own JavaScript. This brings it to a score of 38/100 on the [Lighthouse performance score](https://pagespeed.web.dev/).

After their landing page is loaded, you are being greeted by a **full-screen consent banner**. You have to accept to be **tracked by over 180 companies**. After that I stopped counting. Then you scroll down and images are **loading slowly**. Most interesting articles are premium content, so you have to pay for it. **Ads** are **everywhere**. The website is just slow and bloated. When you read an arcticle it's even worse.

This is just not visitor-friendly. I don't want to wait 3 seconds until I see anything. I don't want to be tracked by 180 companies. I don't want to pay for premium content. I don't want to see ads everywhere. I just want to read the news. I have not even mentioned accessibility.

## Other websites are even worse

Yes, you read right. The average website even [takes 4 seconds](https://httparchive.org/reports/loading-speed) and their [weight is constantly increasing](https://httparchive.org/reports/page-weight).

[Most people don't like ads](https://blog.hubspot.com/marketing/why-people-block-ads-and-what-it-means-for-marketers-and-advertisers), which is not really a surprise. About [40% of people use an ad blocker](https://earthweb.com/how-many-people-use-ad-blockers/).

## How to make your website simpler?

In this section I will show you how you can make your website simpler.

### Make static content static

If you have **static content**, make it static. **Don't hydrate** it on the client. For a blog or a newspaper you only need a bit **HTML** and not megabytes of JavaScript. The only thing you need JavaScript for is to make your website interactive. For example, you can use JavaScript to add small quizzes to your blog posts, like I did in [my article about astro & nuxt](/post/nuxt-astro/). [**Astro**](https://astro.build/) is by the way a great tool to make static websites easily. Therefore I used it for this website.

### Opimize images

Images are a big part of the web. They are also a big part of the weight of a website. If you can, avoid images. If you can't, optimize them. Use [next-gen image formats](https://web.dev/uses-webp-images/), like WebP and [**lazy loading**](https://web.dev/browser-level-image-lazy-loading/) to only load images when they are needed. Also use [**responsive images**](https://web.dev/serve-responsive-images/) to only load images in the size they are needed. and [compression](https://developer.mozilla.org/en-US/docs/Web/HTTP/Compression) to reduce the size of your images.

### Remove huge ad libraries

You could try out **contextual ads** instead of tracking ads. These ads are not based on your visitors, but on the content of your website. This way you don't have to track your visitors. They can also be just implemented server-side. A similar form of ads are sponsored posts or sections at the end of your articles.

Removing ads completely is even better for your visitors. Of course, this is probably not an option for you, but some websites are doing it. For example, [The Markup](https://themarkup.org/) is a news website without ads. They are funded by donations.

In Germany there is also [taz.de](https://taz.de/), which is a news website with almost no ads. They are funded by donations. Another great example is [netzpolitik.org](https://netzpolitik.org/), which is a news website about politics and the internet. They are also funded by donations and have absolutely no ads.

### Remove tracking

Tracking is also a big part of the web. It's not only bad for your visitors, but also for your website. If you use **privacy-friendly analytics**, like [Plausible](https://plausible.io/) or [matomo](https://matomo.org/), you can remove the consent banner. The script by Plausible is **under 1 KB** big and therefore very fast. These solutions are also open source and you can self-host them.

## Conclusion

Let's use the **web for what it was made** for: To **share information**, not bloat. Let's make the web **simpler**, faster and **just better** for our visitors. Let's make the web **a better place**.
