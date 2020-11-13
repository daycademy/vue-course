<template>
  <div class="mt-8">
    <h2 class="text-xl font-bold">{{ title }}</h2>
    <p class="text-gray-700">{{ body }}</p>
    <button
      class="flex items-center px-8 py-2 text-base font-medium leading-7 text-white transition duration-300 ease-in-out"
      @click="$emit('click')"
    >Click</button>
  </div>
</template>

<script>
export default {
  props: ['title', 'body'],
};
</script>
