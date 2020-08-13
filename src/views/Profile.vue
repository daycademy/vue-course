<template>
  <div id="profile">
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
