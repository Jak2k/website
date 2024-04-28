---
title: I made a template for HTMX and rust
tags: [rust, htmx, webdev, actix-web, tera]
featured: false
lastUpdated: 2024-01-27T20:44:57Z
---

I made a template for [**htmx**](https://htmx.org) and **rust**. It uses [**actix-web**](https://actix.rs/) as a backend and [tera](https://keats.github.io/tera/) as a templating engine. It also includes a codetour so you can get started quickly.

You can **find it on [GitHub](https://github.com/Jak2k/htmx-rust-tera-template)**. If you use it or have tried it, please **let me know what you think**!

## Why htmx?

**Most webapps** today are built with JavaScript frameworks like **React or Vue**. These frameworks are great, but they also have some **drawbacks**:

- They are complex and have a steep learning curve.
- They produce **huge bundle** sizes.
- Data must be synced between the frontend and the backend and **logic** must be **duplicated**.

Htmx is a JavaScript library that allows you to **build dynamic webapps without writing any JavaScript**. It does this by adding attributes to your HTML elements. These attributes tell htmx what to do when an event occurs. For example, you can tell htmx to send a request to the backend when a button is clicked. The backend then sends a response back to the frontend, which is then inserted into the page.

## Why Rust?

Rust is a both high-level and low-level programming language. It is **fast, safe**, and has a great community and a lot of libraries. Rust makes your server fast, secure and allows you to encode your business logic in a **strongly typed** language.

## Why actix-web?

Actix-web is a web framework for Rust. It runs in parallel and is blazingly fast. It is also quite easy to use and has a good ecosystem of libraries.

## Why tera?

Tera is allows you to render **Jinja2 templates** in Rust. You may be familiar with Jinja2 if you have used Flask or Django (from Python) before.

## Why use html templates?

HTML templates allow you to make your dynamic webapp **composable** and allow the routes for htmx to return just the right html piece instead of the whole page.

## You just do this because htmx and rust are so hyped right now!

No, I do this because I think it is a **great way** to build webapps. It may be more complicated and **not as comfortable** at the beginning, but it **avoids duplication** of code and allows you to use rust's **type system** to encode your business logic.

## What about SEO?

That's no problem. The pages are rendered on the server and then sent to the client. The client only needs to run htmx's JavaScript library to make the page interactive.

## Can I connect to a database?

For now, I have only included a simple example that uses a HashMap to store counter values. But you can **easily connect** to a **database** by using one of the many Rust libraries for databases. If you want, I can also add this to the template. Just let me know in an issue or in the comments.

## What about ...?

Again, if you have any **questions** or suggestions, please let me know in an **issue or in the comments**. I will try to answer them as soon as possible.
