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
  <div
    class="fixed top-0 h-screen w-screen bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100"
  >
    <nav class="m-2 flex gap-1 rounded-full bg-slate-300 p-1 dark:bg-slate-700">
      <NuxtLink
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        class="rounded-full p-2 hover:bg-slate-50 dark:hover:bg-slate-950"
        >{{ route.name }}</NuxtLink
      >
    </nav>
    <main><slot /></main>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.page-enter-from {
  transform: translateX(100%);
}

.page-leave-to {
  transform: translateX(-100%);
}
</style>
