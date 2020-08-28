<template>
  <div id="profile">
    <router-link :to="`/profile/${$route.params.id}/todos`">Zu den Todos</router-link>
    <router-link :to="`/profile/${$route.params.id}/posts`">Zu den Posts</router-link>
    <h1>Profile {{ id }}</h1>
    <h6>{{ userData }}</h6>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      userData: {},
    };
  },
  created() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`)
      .then((response) => response.json())
      .then((response) => {
        this.userData = response;
      });
  },
};
</script>

<style>
.router-link-active {
  color: #e74c3c;
}
</style>
