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

<script>
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
        this.lastActiveDay = lastActiveData[0].created_at;

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
