<script setup lang="ts">
const routes: { path: string; name: string }[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Posts",
    path: "/posts",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];

useSeoMeta({
  title: "Jak2k",
  description: "Jak2k's personal website",
  author: "Jak2k",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>
<template>
  <div
    class="flex min-h-screen w-screen flex-col bg-white text-black dark:bg-black dark:text-white"
  >
    <nav class="m-2 flex gap-1 rounded-full bg-green-300 p-1 dark:bg-green-700">
      <NuxtLink
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        class="rounded-full p-2 hover:bg-green-100 dark:hover:bg-green-900"
        >{{ route.name }}</NuxtLink
      >
    </nav>
    <main class="grow">
      <slot />
    </main>
    <footer class="m-1 flex flex-col items-center justify-center gap-1 text-xl">
      <p class="flex gap-1 text-2xl">
        <a
          href="https://github.com/Jak2k"
          target="_blank"
          data-smart-cursor="profile"
        >
          <Icon name="cib:github" data-smart-cursor="profile" />
        </a>
        <a
          href="https://mastodontech.de/@jak2k"
          target="_blank"
          data-smart-cursor="profile"
        >
          <Icon name="cib:mastodon" data-smart-cursor="profile" />
        </a>
        <a
          href="https://matrix.to/#/@jak2k:matrix.org"
          data-smart-cursor="chat"
        >
          <Icon name="cib:matrix" data-smart-cursor="chat" />
        </a>
        <a
          href="https://discord.com/users/599098199655055360"
          target="_blank"
          data-smart-cursor="chat"
        >
          <Icon name="cib:discord" data-smart-cursor="chat" />
        </a>
      </p>
      <p>
        I
        <span class="heart inline-block" data-smart-cursor="heart">❤️</span>
        Open Source & Privacy
      </p>
      <p>
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by/4.0/"
          class="flex items-baseline gap-1"
          >This site is licensed under <Icon name="cib:creative-commons" />
          <Icon name="cib:creative-commons-by"
        /></a>
      </p>
    </footer>
    <SmartCursor />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
  filter: blur(0.5em);
}

.page-enter-from {
  transform: translateX(50%);
  opacity: 0;
}

.page-leave-to {
  transform: translateX(-50%);
  opacity: 0;
}

html,
body,
#nuxt {
  margin: 0;
  padding: 0;
  background-color: black;
}

@media (prefers-color-scheme: light) {
  html,
  body,
  #nuxt {
    background-color: white;
  }
}

@keyframes heartbeat {
  0% {
    transform: scale(0.75);
  }
  20% {
    transform: scale(1);
  }
  40% {
    transform: scale(0.75);
  }
  60% {
    transform: scale(1);
  }
  80% {
    transform: scale(0.75);
  }
  100% {
    transform: scale(0.75);
  }
}

.heart {
  animation: heartbeat 1s infinite;
}
</style>
