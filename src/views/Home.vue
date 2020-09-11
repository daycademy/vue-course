<template>
  <section id="home">
    <h1>Test</h1>
  </section>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log(`beforeRouteEnter to: ${to.path}`);
    console.log(`beforeRouteEnter from: ${from.path}`);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(`beforeRouteLeave to: ${to.path}`);
    console.log(`beforeRouteLeave from: ${from.path}`);
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log(`beforeRouteUpdate to: ${to.path}`);
    console.log(`beforeRouteUpdate from: ${from.path}`);
    next();
  },
};
</script>
