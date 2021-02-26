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
    initials(state) {
      const splittedName = state.user.name.split(' ');
      return splittedName[0].charAt(0) + splittedName[1].charAt(0);
    },
  },
  mutations: {
    changeName(state, newName) {
      state.user.name = newName;
    },
  },
  actions: {
    async changeName(context, newName) {
      await setTimeout(() => {
        context.commit('changeName', newName);
      }, 3000);
    },
  },
  modules: {
  },
});
