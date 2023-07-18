<template>
  <div>
    <p>Last active day on GitHub: {{ lastActiveDay }}</p>
    <p>Total stars on GitHub: {{ totalStars }}</p>
    <a :href="'https://github.com/' + username" target="_blank">Visit me on GitHub</a>
  </div>
</template>

<script>
export default {
  name: 'GithubInfo',
  data() {
    return {
      lastActiveDay: '',
      totalStars: 0,
      username: 'Jak2k'
    };
  },
  async created() {
    const response = await fetch(`https://api.github.com/users/${this.username}`);
    const data = await response.json();
    this.lastActiveDay = data.updated_at;
    this.totalStars = data.public_repos; // This is a placeholder, you'll need to calculate the total stars from the user's repos
  }
};
</script>

<style scoped>
  /* Add your styles here */
</style>