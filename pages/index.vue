<script setup lang="ts">
const posts = await useBlog(3);
</script>

<template>
  <div class="m-5 mx-auto w-fit min-w-[20vw] max-w-3xl">
<script setup lang="ts">
import GitHubInfo from '@/components/GitHubInfo.vue';
</script>

    <h1 class="text-9xl underline decoration-green-500">Jak2k</h1>
    <p class="mt-5 max-w-xl text-lg">
      Hi, I'm a frontend developer who loves working with Vue and NuxtJS. I used
      to work with <strong>React, NextJS, and Astro</strong>, but I've since
      <strong>switched over to Vue & NuxtJS</strong>. I'm currently a
      <strong>student</strong> and I use <strong>Fedora Linux</strong> as my
      main operating system. I also enjoy working with TypeScript.
    </p>
    <h2 class="text-3xl">Latest Posts</h2>
    <template v-for="post in posts" :key="post._path">
      <NuxtLink
        v-if="post._path?.startsWith('/posts')"
        :to="`${post._path}`"
        class="m-1 block border-l-2 border-green-500 p-1"
      >
        <h3 class="text-2xl">{{ post.title }}</h3>
        <p>{{ post.description }}</p></NuxtLink
      >
    </template>
    <NuxtLink
      to="/posts"
      class="underline decoration-dashed underline-offset-2 hover:decoration-solid"
      data-smart-cursor="more"
      ><Icon name="line-md:chevron-small-right" />More</NuxtLink
    >
    <h2 class="text-3xl">My Stack</h2>
    <MyStack />
<template>
  <div class="m-5 mx-auto w-fit min-w-[20vw] max-w-3xl">
    <h1 class="text-9xl underline decoration-green-500">Jak2k</h1>
    <GitHubInfo />
    <p class="mt-5 max-w-xl text-lg">
      Hi, I'm a frontend developer who loves working with Vue and NuxtJS. I used
      to work with <strong>React, NextJS, and Astro</strong>, but I've since
      <strong>switched over to Vue & NuxtJS</strong>. I'm currently a
      <strong>student</strong> and I use <strong>Fedora Linux</strong> as my
      main operating system. I also enjoy working with TypeScript.
    </p>
    <h2 class="text-3xl">Latest Posts</h2>
    <template v-for="post in posts" :key="post._path">
      <NuxtLink
        v-if="post._path?.startsWith('/posts')"
        :to="`${post._path}`"
        class="m-1 block border-l-2 border-green-500 p-1"
      >
        <h3 class="text-2xl">{{ post.title }}</h3>
        <p>{{ post.description }}</p></NuxtLink
      >
    </template>
    <NuxtLink
      to="/posts"
      class="underline decoration-dashed underline-offset-2 hover:decoration-solid"
      data-smart-cursor="more"
      ><Icon name="line-md:chevron-small-right" />More</NuxtLink
    >
    <h2 class="text-3xl">My Stack</h2>
    <MyStack />
    <h2 class="text-3xl">Projects</h2>
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
    <NuxtLink
      to="/projects"
      class="underline decoration-dashed underline-offset-2 hover:decoration-solid"
      data-smart-cursor="more"
      ><Icon name="line-md:chevron-small-right" />More</NuxtLink
    >
  </div>
</template>

<style>
h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

strong {
  font-weight: 800;
  text-shadow: 0 0 0.5rem rgba(0, 255, 0, 1);
}
</style>
