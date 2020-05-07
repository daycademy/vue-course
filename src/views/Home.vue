<template>
  <section id="home">
    <TheHeader />
    <TheFooter />
    <UserList />
    <UserList />
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
};
</script>
