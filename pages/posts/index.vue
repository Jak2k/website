<script setup lang="ts">
const posts = await useBlog();
</script>

<template>
  <div class="m-5 mx-auto w-max min-w-[20vw]">
    <h1 class="text-3xl">Posts</h1>
    <NuxtLink
      v-for="post in posts"
      :key="post._path"
      :to="`/posts${post._path}`"
      class="m-1 block border-l-2 p-1"
    >
      <h2 class="text-2xl">{{ post.title }}</h2>
      <p>{{ post.description }}</p>
    </NuxtLink>
  </div>
</template>
