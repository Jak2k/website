<script setup lang="ts"></script>

<template>
  <div class="container m-1 gap-1 text-black">
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
  background-color: #3178c6;
  @apply rounded-b-2xl;
}

.Nuxt {
  grid-area: Nuxt;
  background-color: #00dc82;
  @apply rounded-tl-2xl;
}

.Vue {
  grid-area: Vue;
  background-color: #42b883;
}

.Astro {
  grid-area: Astro;
  background-color: #ff5d01;
}

.React {
  grid-area: React;
  background-color: #149eca;
}

.Vite {
  grid-area: Vite;
  background-color: #bc34fe;
  @apply rounded-tr-2xl;
}

.No-Framework {
  grid-area: No-Framework;
  @apply text-black dark:text-white;
}
</style>
