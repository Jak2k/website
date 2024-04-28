---
title: I switched from React to Vue
tags: [react, vue, javascript, webdev, library, framework]
featured: true
lastUpdated: 2023-10-25T16:17:42Z
---

I enjoyed using React. I really liked it. But then I tried Vue and nuxt. I almost cried, for real. Developing with Vue is so much easier. **React is legacy code.** Here is why.

## SFCs are awesome

In a Vue-file you don't need to do weird stuff with `.map()` or conditional expressions in JSX placeholders. For conditional rendering you can just use the `v-if` and `v-for` html attributes. It's so much easier to read and understand. Oh, and I don't have weird issues with missing brackets anymore. Else-if is also much easier to do.

```vue
<template>
  <div>
    <h1 v-if="age >= 18">Major</h1>
    <h1 v-else-if="age >= 13">Teenager</h1>
    <h1 v-else>Child</h1>
  </div>
</template>
```

and

```vue
<template>
  <div>
    <h1 v-for="item in items" :key="item.id">{{ item.name }}</h1>
  </div>
</template>
```

instead of

```jsx
<div>
  {age >= 18 ? <h1>Major</h1> : age >= 13 ? <h1>Teenager</h1> : <h1>Child</h1>}
</div>
```

and

```jsx
<div>
  {items.map((item) => (
    <h1 key={item.id}>{item.name}</h1>
  ))}
</div>
```

## Vue has an awesome ecosystem

Don't get me wrong, React has a great ecosystem too. But Vue has a lot of well thought and well designed libraries. For example, **pinia** is much **more** fun than redux and **nuxt** has a devtool that **for itself is worth switching** to Vue.

### VueUse

VueUse is a collection of useful composition functions (like hooks in React). It's a great collection of functions that you can use in your Vue project. In react you would need to install a lot of different libraries to get the same functionality.

```vue
<script setup lang="ts">
import { useMouse, useWindowSize } from "@vueuse/core";

const { x, y } = useMouse();
const { width, height } = useWindowSize();
</script>
<template>
  <div>
    <p>Mouse position: {{ x }}, {{ y }}</p>
    <p>Window size: {{ width }}x{{ height }}</p>
  </div>
</template>
```

### Pinia

Pinia is a state management library for Vue. It's much easier to use than Redux and it's much more fun. It's also much easier to understand. It also integrates very well with the nuxt devtools.

**_Statemanagement in a Vue component_**

```vue
<script setup lang="ts">
const counter = ref(0);
</script>
<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button @click="counter++">Increment</button>
  </div>
</template>
```

**_Statemanagement with Pinia_**

```typescript
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const counter = ref(0);

  function increment() {
    counter.value++;
  }
  return { counter, increment };
});
```

```vue
<script setup lang="ts">
import { useCounterStore } from "~/store/counter";

const counterStore = useCounterStore();
</script>
<template>
  <div>
    <p>Counter: {{ counterStore.counter }}</p>
    <button @click="counterStore.increment()">Increment</button>
  </div>
</template>
```

As you can see, state management with Pinia is like state management in a Vue component. It's much easier to understand and much easier to use.

### Nuxt

Nuxt is for Vue what Next.js is for React. It makes it very easy to create a static site or a server side rendered site. It also lets you create api endpoints, but also ships with a powerful database abstraction called nitro stores. You can also edit them in the nuxt devtools.

### Nuxt devtools

The nuxt devtools are awesome. You can inspect everything. Here is an overview:

- **Components**: You can see all components that are currently rendered. You can also see the props and the state of the component.
- **Pinia Stores**: You can see all stores and their state. You can also edit the state.
- **Routes**: You can see all routes and their params.
- **API**: You can see all api endpoints and their params. You can also fill data in the params and send a request.
- **Nitro Stores** You can inspect the data in the nitro stores and edit it.
- **Timeline** You can see all events that happened in the app. You can also see the time it took to render a component.

The killer feature is, that you can add modules from inside the devtools. For example you can add tailwind or unocss [(read a comparison here)](unocss-tailwind) with two clicks. They will also integrate with the devtools.

### Vite

Yes, **vite was originally made for Vue**. It's much faster than webpack and it's much easier to configure. It also has a lot of plugins. For example, you can add a plugin to get a fork of the nuxt devtools in vite.

## Vue has better state management

I already talked about pinia, but you can also store state locally in a component. When showcasing pinia I also showed how to that. Here a small revision:

```vue
<script setup lang="ts">
const counter = ref(0);
const complexUserObject = reactive({ name: "John", age: 18 });
</script>
<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button @click="counter++">Increment</button>
    <p>User: {{ complexUserObject.name }}, {{ complexUserObject.age }}</p>
    <button @click="complexUserObject.age++">Increment age</button>
  </div>
</template>
```

<div class="note">

The demo has been removed because it don't use Vue on this website anymore. [Read more](/post/11ty)

</div>

- `ref` is used for primitive values (like numbers, strings, booleans)
- `reactive` is used for objects and arrays (including nested objects and arrays)

From a `ref` you can get the value with `.value`. This is done automatically in the template.

## Vue has two-way binding

In Vue you can bind a value to an input and the input will update the value. **This much more intuitive than in React**. In React you need to use `useState` and `onChange` to achieve the same result.

```vue
<script setup lang="ts">
const name = ref("");
</script>
<template>
  <div>
    <input v-model="name" />
    <p>Hello {{ name }}</p>
  </div>
</template>
```

<div class="note">

The demo has been removed because it don't use Vue on this website anymore. [Read more](/post/11ty)

</div>

## Why **React** is legacy code

- It's super **old**. It's like the **iPhone**, which was the first smartphone. It was great, but now there are better alternatives. **React is the same. It was great, but now there are better alternatives.** Vue 3.0 is super modern and it's much easier to use.
- It's not intuitive. You trap in many state management issues and you need to use a lot of libraries to get the same functionality as in Vue.
- It uses an old technology. Other frameworks like Vue and Svelte use JS proxies for state management. React uses a setter function. This is much more verbose and much more complicated to use.
- It's owned by Facebook. Originally, it was an internal tool for their needs. Vue is owned by a community.
- React is verbose:

**React**

```jsx
import { useState } from "react"; // You have to import

export default function Counter() {
  // You have to export and define a function
  const [counter, setCounter] = useState(0); // what a monster for such simple like a reactive variable

  return (
    <div>
      <p>Counter: {counter}</p>
      <button
        onClick={() =>
          // A function for such a simple thing? And a second one for setting the state correctly?
          setCounter((c) => c + 1)
        }
      >
        Increment
      </button>
    </div>
  );
}
```

**Vue**

```vue
<script setup lang="ts">
const counter = ref(0);
</script>

<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button @click="counter++">Increment</button>
  </div>
</template>
```

**Another React example**

```jsx
// I just wanted a simple banner!
export default function Banner() {
  return (
    <div>
      <h1>My awesome website</h1>
      <p>It's awesome</p>
    </div>
  );
}
```

**Another Vue example**

```vue
<template>
  <div>
    <h1>My awesome website</h1>
    <p>It's awesome</p>
  </div>
</template>
```

## Conclusion

Vue is much easier to use than React. It's also much more **intuitive**. It's also much **more fun** to use. I switched from React to Vue and I don't regret it. I will never go back to React. **Vue and other libraries like Svelte or qwik are the future. React is legacy code.**
