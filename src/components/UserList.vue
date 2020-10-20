<template>
  <div>
    <ul>
      <li
        v-for="(user, index) in users"
        :key="index"
        @click="user.showAge = true"
        :class="colorize(user.age)"
      >
        {{ user.name }}
        <span v-if="user.showAge">{{ user.age }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  methods: {
    colorize(age) {
      return {
        red: age < 50,
        blue: age > 50,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
div ul {
  margin-top: 100px;
}

.red {
  color: red;
}

.blue {
  color: blue;
}
</style>
