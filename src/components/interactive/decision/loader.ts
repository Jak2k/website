// wait for a "interactive-decision:enable" event
document.addEventListener("interactive-decision:enable", () => {
  import("./host.ts").then((host) => {
    host.init();
  });
});