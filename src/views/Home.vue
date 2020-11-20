<template>
  <section id="home">
    <h1>{{ user.name }} - {{ user.id }}</h1>
  </section>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
