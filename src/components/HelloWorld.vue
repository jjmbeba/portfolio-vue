<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1 class="text-2xl sm:text-3xl md:text-4xl mb-4">{{ msg }}</h1>

  <div class="card mb-4">
    <button type="button" @click="count++" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
      count is {{ count }}
    </button>
    <p class="mt-2 text-sm sm:text-base">
      Edit
      <code class="bg-gray-200 px-1 rounded">components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p class="mb-2 text-sm sm:text-base">
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank" class="text-blue-500 hover:underline">create-vue</a>, the official Vue + Vite starter
  </p>
  <p class="mb-2 text-sm sm:text-base">
    Learn more about IDE Support for Vue in the
    <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank" class="text-blue-500 hover:underline">Vue Docs Scaling up Guide</a>.
  </p>
  <p class="read-the-docs text-sm sm:text-base">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

