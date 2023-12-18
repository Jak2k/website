---
title: A Headless CMS is Bullshit for your developer blog
tags: [blog, blogging, headless-cms, webdev, cms]
featured: true
lastUpdated: 2023-12-18T17:59:19Z
---

Using a **headless CMS** for your developer blog is **bullshit**. Let me explain why.

## What is a headless CMS?

A headless CMS is a content management system that has **no frontend**. It only provides an API to access the content. The **frontend** is completely **decoupled** from the backend. This means that you can use any frontend you want. You can use a static site generator like [astro](https://astro.build/), a frontend framework like [vue](https://vuejs.org/), or even a native mobile app.

## Where does it make sense to use a headless CMS?

A headless CMS **makes sense** if you want to use the same content in multiple places or if the content should be integrated into an existing website. It can be **great for a company** to manage their content in one place and use it on their website, in their mobile app, and in their newsletter.

## Why is it bullshit for your developer blog?

### It's unnecessary overhead

You would have to integrate the headless CMS into your blog, host the CMS and the website and maintain both. When a site is requested, the CMS has to be queried and the content has to be rendered. This is **unnecessary overhead**. You could **just render** the content **when you build** the site.

### It's not more flexible

You only have one frontend for your blog. You don't need to be able to use the same content in multiple places. **You don't need** a headless CMS.

### You know how to write markdown

You are a developer and **know how to write markdown**. You don't need a WYSIWYG editor to write your blog posts. Therefore you don't need a headless CMS.

## Solution

As I said: **Mardown is the solution**. You can write your post in a minimal but powerful format with you favorite text editor, commit, and push it to your git repository. Then your CI/CD pipeline builds your site and deploys it to your server. This is the **most simple and efficient way** to manage your blog.

I use this approach for my blog and I'm very happy with it. I use [astro](https://astro.build/) as a static site generator and sometimes integrate [vue](https://vuejs.org/) components. After writing a post, [vercel](https://vercel.com/) builds and deploys my site. I **don't have to worry** about hosting, scaling, or security. I can **focus** on writing content and enhancing my blog.
