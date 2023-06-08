<script setup lang="ts">
const route = useRoute();
defineProps(["error"]);
</script>

<template :layout="error">
  <div>
    <h1 v-if="error.statusCode === 404">404 - Page Not Found</h1>
    <h1 v-else>Error {{ error.statusCode }}</h1>
    <p>
      Are you sure
      <code>
        <pre>{{ route.fullPath }}</pre>
      </code>
      exists?
    </p>
  </div>
</template>
