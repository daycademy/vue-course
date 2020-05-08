<template>
  <section id="home">
    <TheHeader />
    <TheFooter />
    <keep-alive>
      <component :is="component" :users="users"></component>
    </keep-alive>
    <button @click="toggleComponent">Toggle</button>
    <AddUserButton @new-user="addUser" />
  </section>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import UserList from '../components/UserList.vue';
import AddUserButton from '../components/AddUserButton.vue';
import Map from '../components/Map.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    UserList,
    AddUserButton,
    Map,
  },
  data() {
    return {
      component: Map,
      users: [
        { name: 'Florian', age: 21, showAge: false },
        { name: 'Peter', age: 54, showAge: false },
      ],
    };
  },
  methods: {
    addUser(newUser) {
      this.users.push(newUser);
    },
    toggleComponent() {
      this.component = this.component === UserList
        ? Map
        : UserList;
    },
  },
};
</script>
