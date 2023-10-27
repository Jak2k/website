<script setup lang="ts">
import { ref } from "vue";
const name = ref("");
</script>
<template>
  <div>
    <input v-model="name" />
    <p>Hello {{ name }}</p>
  </div>
</template>