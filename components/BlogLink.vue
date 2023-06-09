<script setup lang="ts">
defineProps<{
  href: string;
}>();
</script>

<template>
  <NuxtLink
    :to="href.startsWith('https://') ? href : '/posts/' + href"
  ></NuxtLink>
</template>
