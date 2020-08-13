import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Profile from '@/views/Profile.vue';
import Posts from '@/views/profile/Posts.vue';
import Todos from '@/views/profile/Todos.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/profile/:id',
    component: Profile,
    children: [
      {
        path: 'posts',
        component: Posts,
      },
      {
        path: 'todos',
        component: Todos,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
