<template>
  <div id="profile">
    <div class="py-4 space-x-4 text-sm text-blue-900">
      <router-link :to="`/profile/${$route.params.id}/todos`">Zu den Todos</router-link>
      <router-link :to="`/profile/${$route.params.id}/posts`">Zu den Posts</router-link>
    </div>
    <div class="flex items-center mb-2 space-x-2">
      <h1 class="text-xl">{{ userData.name }}</h1>
      <h6 class="text-gray-600">{{ userData.username }}</h6>
    </div>
    <p>Email: {{ userData.email }}, Website: {{ userData.website }}</p>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      userData: {},
    };
  },
  created() {
    this.$http.get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
      .then((response) => {
        this.userData = response.data;
      });
  },
};
</script>

<style>
.router-link-active {
  @apply text-blue-700;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
