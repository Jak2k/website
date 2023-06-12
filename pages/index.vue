<script setup lang="ts">
const posts = await useBlog(3);
</script>

<template>
  <div class="m-5 mx-auto w-max min-w-[20vw]">
    <h1 class="text-9xl">Jak2k</h1>
    <p class="mt-5 max-w-xl text-lg">
      Hi, I'm a frontend developer who loves working with Vue and NuxtJS. I used
      to work with React, NextJS, and Astro, but I've since switched over to
      Vue. I'm currently a student and I use Fedora Linux as my operating
      system. I also enjoy working with TypeScript.
    </p>
    <h2 class="text-3xl">Latest Posts</h2>
    <NuxtLink
      v-for="post in posts"
      :key="post._path"
      :to="`/posts${post._path}`"
      class="m-1 block border-l-2 border-green-500 p-1"
    >
      <h2 class="text-2xl">{{ post.title }}</h2>
      <p>{{ post.description }}</p>
    </NuxtLink>
    <NuxtLink
      to="/posts"
      class="underline decoration-dashed underline-offset-2 hover:decoration-solid"
      data-smart-cursor="more"
      ><Icon name="line-md:chevron-small-right" />More</NuxtLink
    >
    <h2 class="text-3xl">My Stacks</h2>
    <MyStack />
  </div>
</template>
