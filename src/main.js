import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.mixin({
  mounted() {
    console.log('Global Mixin mounted');
  },
});

Vue.directive('background', {
  /* eslint-disable */
  bind(el, binding, vnode) {
    const color = binding.value || 'green';
    el.style.backgroundColor = color;
  },
});

Vue.directive('test', {
  bind(el, binding, vnode) {
    console.log(binding.expression);
    console.log(binding.value);
    console.log(binding.arg);
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
