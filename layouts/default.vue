<script setup lang="ts">
const routes: { path: string; name: string }[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Posts",
    path: "/posts",
  },
  {
    name: "Me",
    path: "/me",
  },
];
</script>
<template>
  <div class="w-screen bg-white text-black dark:bg-black dark:text-white">
    <nav class="m-2 flex gap-1 rounded-full bg-green-300 p-1 dark:bg-green-700">
      <NuxtLink
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        class="rounded-full p-2 hover:bg-green-100 dark:hover:bg-green-900"
        >{{ route.name }}</NuxtLink
      >
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.2em);
}

.page-enter-from {
  transform: translateX(100%) scale(0.5) rotate(10deg);
}

.page-leave-to {
  transform: translateX(-100%) scale(0.5) rotate(-10deg);
}

html,
body,
#nuxt {
  margin: 0;
  padding: 0;
  background-color: black;
}

@media (prefers-color-scheme: light) {
  html,
  body,
  #nuxt {
    background-color: white;
  }
}
</style>
