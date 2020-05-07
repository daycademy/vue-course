new Vue({
  el: '#app',
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
  },
});