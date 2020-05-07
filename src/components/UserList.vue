<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.name" @click="user.showAge = true">
        {{ user.name }}
        <span v-if="user.showAge">{{ user.age }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { name: 'Florian', age: 21, showAge: false },
        { name: 'Peter', age: 54, showAge: false },
      ],
    };
  },
};
</script>

<style lang="scss">
div ul {
  margin-top: 100px;
}
</style>
