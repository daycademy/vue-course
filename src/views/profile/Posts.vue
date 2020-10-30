<template>
  <div>
    <h1>Posts</h1>
    <h6>{{ filteredPosts }}</h6>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: [],
    };
  },
  computed: {
    filteredPosts() {
      const filter = this.$route.query.sort;
      if (!filter) {
        return this.userData;
      }
      const filteredPosts = this.userData;
      return filteredPosts.sort((a, b) => {
        if (a.title < b.title) {
          return filter === 'asc' ? -1 : 1;
        }
        if (a.title > b.title) {
          return filter === 'asc' ? 1 : -1;
        }
        return 0;
      });
    },
  },
  created() {
    const userId = this.$route.params.id;
    fetch(`${this.process.VUE_APP_BACKEND_URL}/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((response) => {
        this.userData = response;
      });
  },
};
</script>
