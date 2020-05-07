let vOne = new Vue({
  el: '#vue-one-app',
  data: {
    firstname: '',
    lastname: '',
    names: ['Florian', 'Gustav', 'Peter'],
    persons: [
      { name: 'Florian', age: 21 },
      { name: 'Gustav', age: 51 },
    ],
  },

  computed: {
    fullname() {
      return `${this.fullname} ${this.lastname}`;
    },
    print() {
      return this.names[0];
    },
  },
});

let vTwo = new Vue({
  el: '#vue-two-app',
  data: {
    helloStr: 'Hello World',
  },

  computed: {
    print() {
      return this.helloStr;
    },
  },

  methods: {
    changeData() {
      vOne.firstname = 'My Firstname';
    },
  },
});
