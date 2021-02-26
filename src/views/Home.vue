<template>
  <section id="home">
    <h1>{{ user.name }} - {{ user.id }}</h1>
    <p>Initialen: {{ initials }}</p>
    <input
      v-model="name"
      class="px-4 py-2 mr-8 border border-gray-300 focus:outline-none"
      type="text"
    >
    <button
      class="px-8 py-2 text-base font-medium leading-7 text-white transition duration-300 ease-in-out bg-indigo-500 rounded-md hover:bg-indigo-700 focus:outline-none"
      @click="changeName(name)"
    >Change name</button>
  </section>
</template>

<script>
import {
  mapState, mapGetters, mapMutations, mapActions,
} from 'vuex';

export default {
  data() {
    return {
      name: '',
    };
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['initials']),
  },
  methods: {
    ...mapMutations({ changeNameMutation: 'changeName' }),
    ...mapActions(['changeName']),
  },
};
</script>
