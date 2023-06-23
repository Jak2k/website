<script setup lang="ts">
const { slug } = useRoute().params;
const slugIsArray = Array.isArray(slug);

console.log("/projects/" + (slugIsArray ? slug.join("/") : slug));

const { data } = await useAsyncData("home", () =>
  queryContent("/projects/" + (slugIsArray ? slug.join("/") : slug)).findOne()
);
</script>

<template>
  <div v-if="data" class="m-5 mx-auto w-max min-w-[20vw]">
    <h1 class="text-5xl text-green-400 dark:text-green-600">
      {{ data?.title }}
    </h1>
    <ContentRenderer
      v-if="data?._type === 'markdown'"
      :value="data"
      class="postcontent prose prose-neutral dark:prose-invert lg:prose-xl selection:bg-green-300 prose-img:rounded-xl dark:selection:bg-green-700"
      :components="// @ts-ignore
      { a: BlogLink }"
    />
  </div>
  <div
    v-else
    class="0 flex h-screen w-screen flex-col items-center justify-center"
  >
    <h1 class="text-3xl">404 - Not Found</h1>
    <NuxtLink
      to="/projects"
      class="rounded-full bg-green-300 p-2 hover:bg-green-100 dark:bg-green-700 dark:hover:bg-green-900"
      >Look for other projects</NuxtLink
    >
  </div>
</template>
<style>
.postcontent :nth-child(1) {
  --delay: 1s;
}

.postcontent :nth-child(2) {
  --delay: 2s;
}

.postcontent :nth-child(3) {
  --delay: 3s;
}

.postcontent :nth-child(4) {
  --delay: 4s;
}

.postcontent :nth-child(5) {
  --delay: 5s;
}

.postcontent :nth-child(6) {
  --delay: 6s;
}

.postcontent :nth-child(7) {
  --delay: 7s;
}

.postcontent :nth-child(8) {
  --delay: 8s;
}

.postcontent :nth-child(9) {
  --delay: 9s;
}

.postcontent :nth-child(10) {
  --delay: 10s;
}
</style>
