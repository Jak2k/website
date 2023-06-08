<script setup lang="ts">
const route = useRoute();
// eslint-disable-next-line vue/require-prop-types
defineProps(["error"]);
</script>

<template :layout="error">
  <div
    class="flex h-screen w-screen flex-col items-center justify-center bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100"
  >
    <h1 v-if="error.statusCode === 404" class="text-3xl">
      404 - Page Not Found
    </h1>
    <h1 v-else>Error {{ error.statusCode }}</h1>
    <p class="flex flex-row">
      Are you sure
      <code>
        <pre class="font-mono text-xl"> {{ route.fullPath }} </pre>
      </code>
      exists?
    </p>
    <NuxtLink
      class="rounded-full p-2 hover:bg-slate-200 dark:hover:bg-slate-800"
      to="/"
      >Go Home</NuxtLink
    >
  </div>
</template>
