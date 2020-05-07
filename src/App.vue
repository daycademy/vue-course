<template>
  <div>
    <h4>{{ name }}</h4>
    <h4>{{ sayHi() }}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Florian',
    };
  },

  methods: {
    sayHi() {
      return `Hi ${this.name}`;
    },
  },
};
</script>

<style lang="scss">
</style>
