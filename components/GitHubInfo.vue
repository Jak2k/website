<template>
  <div>
    <!-- Display the last active day on GitHub -->
    <p>Last active day: {{ lastActiveDay }}</p>

    <!-- Display the total stars on GitHub -->
    <p>Total stars: {{ totalStars }}</p>

    <!-- Add a "visit me on GitHub" button -->
    <a href="https://github.com/Jak2k" target="_blank">Visit me on GitHub</a>
  </div>
</template>

<script lang="ts">
  function timeAgoFromISODate(isoDate: string): string {
  const date = new Date(isoDate);
  const currentTime = new Date();

  const timeDifferenceInSeconds = Math.floor((currentTime.getTime() - date.getTime()) / 1000);
  const timeDifferenceInMinutes = Math.floor(timeDifferenceInSeconds / 60);

  const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  const timeAgo = formatter.format(-timeDifferenceInMinutes, 'minute');

  return timeAgo;
}

export default {
  data() {
    return {
      lastActiveDay: '',
      totalStars: 0
    };
  },
  mounted() {
    this.fetchGitHubInfo();
  },
  methods: {
    async fetchGitHubInfo() {
      try {
        // Fetch the last active day from the GitHub API
        const lastActiveResponse = await fetch('https://api.github.com/users/Jak2k/events');
        const lastActiveData = await lastActiveResponse.json();
        this.lastActiveDay = timeAgoFromISODate(lastActiveData[0].created_at);

        // Fetch the total stars from the GitHub API
        const starsResponse = await fetch('https://api.github.com/users/Jak2k/repos');
        const starsData = await starsResponse.json();
        this.totalStars = starsData.reduce((total, repo) => total + repo.stargazers_count, 0);
      } catch (error) {
        console.error('Error fetching GitHub info:', error);
      }
    }
  }
};
</script>
