<script lang="ts" setup>
const lastActiveDay = ref("");
const totalStars = ref(0);

function timeAgoFromLatestEvent(events: any[]): string {
  if (events.length === 0) {
    return "No events found.";
  }

  // Find the latest event based on the "created_at" property
  const latestEvent = events.reduce((prev, current) =>
    new Date(current.created_at).getTime() > new Date(prev.created_at).getTime()
      ? current
      : prev
  );
  const latestEventTime = new Date(latestEvent.created_at);
  const currentTime = new Date();

  const timeDifferenceInSeconds = Math.floor(
    (currentTime.getTime() - latestEventTime.getTime()) / 1000
  );
  const timeDifferenceInMinutes = Math.floor(timeDifferenceInSeconds / 60);

  const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const timeAgo = formatter.format(-timeDifferenceInMinutes, "minute");

  return `${timeAgo} (${latestEvent.repo.name})`;
}

onMounted(() => {
  fetchGitHubInfo();
});

async function fetchGitHubInfo() {
  try {
    // Fetch the last active day from the GitHub API
    const lastActiveResponse = await fetch(
      "https://api.github.com/users/Jak2k/events"
    );
    const lastActiveData = await lastActiveResponse.json();
    lastActiveDay.value = timeAgoFromLatestEvent(lastActiveData);

    // Fetch the total stars from the GitHub API
    const starsResponse = await fetch(
      "https://api.github.com/users/Jak2k/repos"
    );
    const starsData = await starsResponse.json();
    totalStars.value = starsData.reduce(
      (total: number, repo: { stargazers_count: number }) =>
        total + repo.stargazers_count,
      0
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error fetching GitHub info:", error);
  }
}
</script>
<template>
  <div>
    <p>Last active day: {{ lastActiveDay }}</p>
    <p>Total stars: {{ totalStars }}</p>
  </div>
</template>
