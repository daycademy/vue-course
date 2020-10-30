<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ body }}</p>
    <button @click="$emit('click')">Click</button>
  </div>
</template>

<script>
export default {
  props: ['title', 'body'],
};
</script>
