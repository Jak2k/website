<script setup lang="ts">
const posts = await useBlog(3);
import GitHubInfo from '@/components/GitHubInfo.vue';
</script>

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
    ...
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
