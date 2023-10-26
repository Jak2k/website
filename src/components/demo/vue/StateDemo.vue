<script setup lang="ts">
import { ref, reactive } from "vue"
const counter = ref(0);
const complexUserObject = reactive({ name: "John", age: 18 });
</script>
<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button @click="counter++">Increment</button>
    <p>User: {{ complexUserObject.name }}, {{ complexUserObject.age }}</p>
    <button @click="complexUserObject.age++">Increment age</button>
  </div>
</template>
<style scoped>
button {
  border: solid red 1px;
}
</style>