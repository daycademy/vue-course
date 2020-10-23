<template>
  <div>
    <h1>Posts</h1>
    <Post
      v-for="post in filteredPosts"
      :key="post.id"
      :title="post.title"
      :body="post.body"
    />
  </div>
</template>

<script>
import Post from '@/components/Post.vue';

export default {
  components: {
    Post,
  },
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
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((response) => {
        this.userData = response;
      });
  },
};
</script>
