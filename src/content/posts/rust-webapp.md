---
title: How to write a webapp in Rust
tags: [rust, webdev, webapp, wasm]
featured: true
lastUpdated: 2023-12-18T18:19:11Z
---

You could write a webapp in Rust, but why should you do that? And how? This post tries to answer most of your questions. If I missed something, please let me know in the comments.

## Why should you write a webapp in Rust?

- Rust is **safe**. When it compiles, it works. No more unhandled exceptions or null pointer exceptions.
- Rust is **fast**. It's as fast as C++ and C, but with a much nicer syntax.
- Rust is **modern**. It has a great package manager, a great build system, and a great community.
- Rust is **cross-platform**. It runs on every OS and on the web.
- Rust is **everything**. It is low-level with no-cost abstractions, but it is also high-level with a great standard library and high-level abstractions.
- Rust is **helpful**. It has a great compiler that helps you write better code.

## How to write a webapp in Rust?

To write a frontend in Rust, you could write functions in rust, compile them to **WebAssembly**, and then use them in JavaScript, or you could use a framework like [**Yew**](https://yew.rs/). We will use Yew in this tutorial. It has an approach **similar to React**, but it is written in Rust and much **more modern** than grandpa React.

### Prerequisites

- [Rust](https://www.rust-lang.org/) - Of course, you need Rust to write Rust code.
- `rustup target add wasm32-unknown-unknown` - This command installs the WebAssembly target for Rust.
- `cargo install --locked trunk` - This command installs the [Trunk](https://trunkrs.dev/) build tool for Rust.

### Create a new project

To create a new project, run `cargo generate --git https://github.com/yewstack/yew-trunk-minimal-template`. This command creates a new project from the yew-trunk-minimal-template. It is a minimal template for Yew and Trunk.

The alternative is to [create a new project from scratch](https://yew.rs/docs/getting-started/build-a-sample-app#setting-up-the-application-manually).

### Ok, how does it work?

Look at this code. I added a few comments to explain what's going on.

```rust
use yew::prelude::*; // Import things you will need quite often.

#[function_component] // Declare a function component. It works like a React functional component.
fn App() -> Html {
    let counter = use_state(|| 0); // this looks like React hooks, right? It is more like a Preact signal, but don't mind.
    let onclick = {
        let counter = counter.clone(); // Take the value
        move |_| {
            let value = *counter + 1; // Increment it
            counter.set(value); // And set it!
        }
    };

    html! { // This is valid rust, checked by the compiler. Magic!
        <div>
            <button {onclick}>{ "+1" }</button>
            <p>{ *counter }</p>
        </div>
    }
}

fn main() {
    yew::Renderer::<App>::new().render(); // And render it!
}
```

Wow, that was easy, right? But how do you compile it? Run `trunk serve` to compile it and serve it on `http://localhost:8080`.

### Can we do even better? Yes, we can!

Rust provides powerful enums. We can use them to create messages, that are similar to redux actions.

```rust
use js_sys::Date;
// ...

#[derive(Clone, Copy, Debug)] // Automagicly add some functionality to the enum
enum Msg {
    Increment, // One of the cases of the enum
    Decrement,
}

struct App { // The model of the app
    counter: u64,
}

impl Component for App { // This time it's not functional
    type Message = Msg; // The type of the messages
    type Properties = (); // We have no props

    fn create(_ctx: &Context<Self>) -> Self { // Create the model
        Self { counter: 0 }
    }

    fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg { // Every case of the enum MUST be handled
            Msg::Increment => {
                self.value += 1;
                true // Return true to cause the displayed change to update
            }
            Msg::Decrement => {
                self.value -= 1;
                true
            }
        }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        html! {
            <div>
                // We can set classes
                <div class="panel">
                    // A button to send the Increment message
                    <button class="button" onclick={ctx.link().callback(|_| Msg::Increment)}>
                        { "+1" }
                    </button>

                    // A button to send the Decrement message
                    <button onclick={ctx.link().callback(|_| Msg::Decrement)}>
                        { "-1" }
                    </button>

                    // A button to send two Increment messages
                    <button onclick={ctx.link().batch_callback(|_| vec![Msg::Increment, Msg::Increment])}>
                        { "+1, +1" }
                    </button>

                </div>

                // Display the current value of the counter
                <p class="counter">
                    { self.value }
                </p>

                // Display the current date and time the page was rendered
                <p class="footer">
                    { "Rendered: " }
                    { String::from(Date::new_0().to_string()) }
                </p>
            </div>
        }
    }
}

// ...
```

Ok, let's recap:

- We created a new enum called `Msg` with two cases: `Increment` and `Decrement`.
- We created a new struct called `App` with a field called `counter`.
- We implemented the `Component` trait for `App` so that we can use it as a component.
- We implemented the `create` method to create a new instance of `App`.
- We implemented the `update` method to handle messages.
- We implemented the `view` method to render the component.

This looks like a react class component, right? But it is much better and powerful. Think of it as a redux reducer and a view function in one.

## Can I use it in production?

For small side projects, yes. For big critical projects, maybe wait a bit. Yew is still in development, but it is already quite great.

## More resources

- [Yew](https://yew.rs/) - The official website of Yew.
- [Examples](https://github.com/yewstack/yew/tree/master/examples) - Examples of Yew.
- [Playground](https://play.yew.rs/) - A playground for Yew. (You should run your code locally, the playground can be a bit slow.)
- [Trunk](https://trunkrs.dev/) - The official website of Trunk.
- [Rust](https://www.rust-lang.org/) - The official website of Rust.
- [Rust book](https://doc.rust-lang.org/book/) - The official book of Rust.
- [Rust by example](https://doc.rust-lang.org/rust-by-example/) - Rust by example.
