<template>
  <div>
    <p>Last Active Day: {{ lastActiveDay }}</p>
    <p>Total Stars: {{ totalStars }}</p>
    <a :href="githubUrl">Visit me on GitHub</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastActiveDay: null,
      totalStars: null,
      githubUrl: 'https://github.com/Jak2k'
    };
  },
  mounted() {
    // Make API calls to fetch last active day and total stars from GitHub API
    // Update component data with the fetched values
  }
};
</script>