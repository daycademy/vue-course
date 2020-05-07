<template>
  <div>
    <h1>{{ content }}</h1>
    <input v-model="title">
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    };
  },

  props: {
    content: {
      type: String,
      required: true,
    },
  },

  beforeCreate() {
    console.log('beforeCreate');
  },

  created() {
    console.log('created');
  },

  beforeMount() {
    console.log('beforeMount');
  },

  mounted() {
    console.log('mounted');
  },

  beforeUpdate() {
    console.log('beforeUpdate');
  },

  updated() {
    console.log('updated');
  },

  beforeDestroy() {
    console.log('beforeDestroy');
  },

  destroyed() {
    console.log('destroyed');
  },
};
</script>
