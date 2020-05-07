<template>
  <section id="home">
    <TheHeader />
    <TheFooter />
    <Map ref="myMap" />
    <input ref="input">
    <UserList :users="users" />
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
  mounted() {
    console.log(
      `${this.$refs.myMap.latitude} - ${this.$refs.myMap.longitude}`,
    );
    console.log(this.$refs.myMap.getLngLat());
    this.$refs.input.placeholder = 'My Placeholder';
    this.$refs.input.focus();
  },
  data() {
    return {
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
  },
};
</script>
