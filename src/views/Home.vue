<template>
  <section id="home">
    <h1>{{ user.name }} - {{ user.id }}</h1>
    <p>Initialen: {{ $store.getters.getInitials }}</p>
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
