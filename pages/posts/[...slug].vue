<script setup lang="ts">
const { slug } = useRoute().params;
const slugIsArray = Array.isArray(slug);

const { data } = await useAsyncData("home", () =>
  queryContent(slugIsArray ? slug.join("/") : slug).findOne()
);
</script>

<template>
  <div v-if="data" class="m-5 mx-auto w-max min-w-[20vw]">
    <h1 class="text-3xl">
      {{ data?.title }}
    </h1>
    <ContentRenderer v-if="data?._type === 'markdown'" :value="data" />
  </div>
  <div
    v-else
    class="flex h-screen w-screen flex-col items-center justify-center bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100"
  >
    <h1 class="text-3xl">404 - Not Found</h1>
    <NuxtLink
      to="/posts"
      class="rounded-full bg-slate-50 p-2 hover:bg-slate-200 dark:bg-slate-950 dark:hover:bg-slate-800"
      >Look for other posts</NuxtLink
    >
  </div>
</template>
