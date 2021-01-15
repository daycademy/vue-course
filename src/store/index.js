import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: 1,
      name: 'Florian Woelki',
    },
  },
  getters: {
    getInitials(state) {
      const splittedName = state.user.name.split(' ');
      return splittedName[0].charAt(0) + splittedName[1].charAt(0);
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
