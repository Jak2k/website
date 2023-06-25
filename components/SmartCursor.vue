<script setup lang="ts">
const mousePosition = useMouse({
  type: "client",
});
const cursorType = ref("default");

function isLinkOrInLink(el: HTMLElement): true | false | "external" {
  if (el.tagName === "A")
    return !(el as HTMLAnchorElement).href.startsWith(location.origin)
      ? "external"
      : true;
  if (el.parentElement) return isLinkOrInLink(el.parentElement);
  return false;
}

function dataPropOrParentProp(
  el: HTMLElement,
  depth = 0
): { depth: number; type: string | false } {
  if (el.dataset.smartCursor) {
    return {
      depth,
      type: el.dataset.smartCursor,
    };
  }

  if (el.parentElement) {
    return dataPropOrParentProp(el.parentElement, depth + 1);
  }

  return {
    depth,
    type: false,
  };
}

useEventListener("mouseover", (e) => {
  const isExternal = e.target && isLinkOrInLink(e.target as HTMLElement);
  // @ts-ignore
  const cursorProps = dataPropOrParentProp(e.target as HTMLElement);
  if (cursorProps.depth < 2 && cursorProps.type) {
    cursorType.value = cursorProps.type;
  } else if (isExternal === "external") {
    cursorType.value = "external";
  } else if (isExternal) {
    cursorType.value = "link";
  } else if (cursorProps.type) {
    cursorType.value = cursorProps.type;
  } else {
    cursorType.value = "default";
  }
});

const mouseStyle = computed(() => {
  return {
    top: `${mousePosition?.y.value + 1 || 0}px`,
    left: `${mousePosition?.x.value + 1 || 0}px`,
    // when cursor = heart, set color to red
    color: cursorType.value === "heart" ? "white" : "",
    backgroundColor: cursorType.value === "heart" ? "red" : "",
  };
});

const icons = {
  default: "",

  // links
  link: "line-md:arrow-right",
  more: "line-md:plus",
  external: "line-md:external-link",

  // social
  profile: "line-md:account",
  chat: "line-md:email",

  // media
  play: "line-md:play",
  pause: "line-md:pause",

  // navigation
  close: "line-md:close",
  "arrow-left": "line-md:arrow-left",
  "arrow-right": "line-md:arrow-right",
  "arrow-up": "line-md:arrow-up",
  "arrow-down": "line-md:arrow-down",
  confirm: "line-md:confirm",

  // actions
  edit: "line-md:edit",
  delete: "line-md:minus",
  save: "line-md:document",

  // special
  heart: "line-md:heart",
};

const icon = computed(() => {
  return Object.keys(icons).includes(cursorType.value)
    ? // @ts-ignore
      icons[cursorType.value]
    : cursorType.value || "default";
});
</script>

<template>
  <ClientOnly>
    <div
      class="fixed aspect-square rounded-full rounded-tl-none bg-black p-1 text-white dark:bg-white dark:text-black"
      :style="mouseStyle"
    >
      <Icon v-if="icon" :name="icon" class="h-5 w-5" />
      <p v-else class="h-5 w-5"></p></div
  ></ClientOnly>
</template>
<style>
* {
  cursor: none !important;
}

:root {
  --cursor: "default";
}

:root:has(a:hover) {
  --cursor: "link";
}
</style>
