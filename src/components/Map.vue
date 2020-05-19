<template>
  <div>
    <h1>{{ latitude }} - {{ longitude }}</h1>
    <slot name="subtitle" />
    <slot name="title" :number="1729" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      latitude: 42,
      longitude: 1729,
    };
  },
  methods: {
    getLngLat() {
      return [this.latitude, this.longitude];
    },
  },
};
</script>

<style lang="scss">
h1 {
  margin-top: 100px;
  margin-left: 1em;
}
</style>
