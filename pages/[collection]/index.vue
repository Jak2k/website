<script setup lang="ts">
const posts = await useBlog();
const { collection } = useRoute().params;
</script>

<template>
  <div class="m-5 mx-auto w-max min-w-[20vw]">
    <h1 class="text-3xl capitalize">{{ collection }}</h1>
    <template v-for="post in posts" :key="post._path">
      <NuxtLink
        v-if="post._path?.startsWith('/' + collection)"
        :to="post._path.replace('/','')"
        class="m-1 block border-l-2 border-green-500 p-1"
      >
        <h3 class="text-2xl">{{ post.title }}</h3>
        <p>{{ post.description }}</p></NuxtLink
      >
    </template>
  </div>
</template>
