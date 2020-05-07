<template>
  <section id="home">
    <TheHeader />
    <TheFooter />
    <UserList :users="users" />
  </section>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import UserList from '../components/UserList.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    UserList,
  },
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
