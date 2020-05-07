let vOne = new Vue({
  el: '#app',
  data: {
    username: '',
    password: '',
    currentUser: 'florian',
    feedback: '',
    users: [
      { name: 'florian', password: '123' },
      { name: 'peter', password: 'abc' },
      { name: 'olaf', password: '123456' },
    ],
  },

  methods: {
    checkCredentials() {
      return this.users.filter(user => password === user.password);
    },
    checkCredentials(event) {
      event.preventDefault();
      if (
        this.username === this.currentUser &&
        this.checkPassword(this.password).length !== 0
      ) {
        this.feedback = 'Korrekte Credentials';
      } else {
        this.feedback = 'Falsche Credentials';
      }
    },
    changeUser(name) {
      this.currentUser = name;
    },
  },
});
