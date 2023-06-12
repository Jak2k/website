<script setup lang="ts"></script>

<template>
  <div class="container m-1 gap-1">
    <div class="tech Typescript">Typescript</div>
    <div class="tech Nuxt">Nuxt</div>
    <div class="tech Vue">Vue</div>
    <div class="tech Astro">Astro</div>
    <div class="tech React">React</div>
    <div class="tech Vite">Vite</div>
    <div class="tech No-Framework">No Framework / React / Vue</div>
  </div>
</template>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-auto-flow: row;
  grid-template-areas:
    "Nuxt Astro Vite"
    "Vue React No-Framework"
    "Typescript Typescript Typescript";
}

.tech {
  @apply p-3 text-center;
}

.Typescript {
  grid-area: Typescript;
  background-color: rgb(0, 60, 255);
  @apply rounded-b-2xl;
}

.Nuxt {
  grid-area: Nuxt;
  background-color: rgb(0, 116, 0);
  @apply rounded-tl-2xl;
}

.Vue {
  grid-area: Vue;
  background-color: rgb(0, 138, 0);
}

.Astro {
  grid-area: Astro;
  background-color: orange;
  color: black;
}

.React {
  grid-area: React;
  background-color: blue;
}

.Vite {
  grid-area: Vite;
  background-color: purple;
  @apply rounded-tr-2xl;
}

.No-Framework {
  grid-area: No-Framework;
}
</style>
