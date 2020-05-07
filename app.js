new Vue({
  el: '#app',
  data: {
    person: {
      name: 'Florian',
      height: 189,
    },
    website: 'http://google.com/',
    atag: '<a href="http://google.com">Testing html</a>',
  },

  methods: {
    sayHi: function(greeting) {
      return greeting + ' ' + this.person.name;
    },
  },
});