<script setup lang="ts">
const routes: { path: string; name: string }[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Me",
    path: "/me",
  },
];
</script>
<template>
  <div
    class="fixed top-0 h-screen w-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100"
  >
    <nav class="m-2 flex gap-1 rounded-full bg-gray-300 p-1 dark:bg-gray-700">
      <NuxtLink
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        class="rounded-full p-2 hover:bg-gray-50 dark:hover:bg-gray-950"
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
  transform: trangrayX(100%);
}

.page-leave-to {
  transform: trangrayX(-100%);
}
</style>
