<template>
  <section id="home">
    <TheHeader />
    <TheFooter />
    <Map>
      <template #title="slotProps">
        <h3>Titel {{ slotProps.number }}</h3>
        <h3>Zweite Zeile</h3>
      </template>
      <p slot="subtitle">Subtitle</p>
    </Map>
    <button @click="printTestVar">CLICK ME</button>
    <p v-background="'#000'" v-test:arg1="1 + 1">Das ist ein Test</p>
    <UserList :users="users"></UserList>
    <AddUserButton @new-user="addUser" />
  </section>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import UserList from '../components/UserList.vue';
import AddUserButton from '../components/AddUserButton.vue';
import Map from '../components/Map.vue';

const myMixin = {
  data() {
    return {
      testVar: 'Hello World',
    };
  },
  mounted() {
    console.log(this.testVar);
  },
  methods: {
    printTestVar() {
      console.log(this.testVar);
    },
  },
};

export default {
  components: {
    TheHeader,
    TheFooter,
    UserList,
    AddUserButton,
    Map,
  },
  mixins: [myMixin],
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
    toggleComponent() {
      this.component = this.component === UserList
        ? Map
        : UserList;
    },
  },
};
</script>
