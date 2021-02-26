<template>
  <section id="home">
    <h1>{{ user.name }} - {{ user.id }}</h1>
    <p>Initialen: {{ $store.getters.getInitials }}</p>
    <input v-model="name" type="text">
    <button @click="changeName">Change name</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    changeName() {
      this.$store.dispatch('changeName', this.name);
    },
  },
};
</script>
