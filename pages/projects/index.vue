<script setup lang="ts">
const posts = await useBlog();
</script>

<template>
  <div class="m-5 mx-auto w-max min-w-[20vw]">
    <h1 class="text-3xl">Projects</h1>
    <template v-for="post in posts" :key="post._path">
      <NuxtLink
        v-if="post._path?.startsWith('/projects')"
        :to="`${post._path}`"
        class="m-1 block border-l-2 border-green-500 p-1"
      >
        <h3 class="text-2xl">{{ post.title }}</h3>
        <p>{{ post.description }}</p></NuxtLink
      >
    </template>
  </div>
</template>
