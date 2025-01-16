<script setup>
const { description, tags, link, title } = defineProps(['link', 'title', 'description', 'tags'])
</script>

<template>
  <div class="border border-slate-300 rounded p-2 w-full">
    <a :href="link" target="_blank">
      <h4 class="text-sm font-bold hover:underline">{{ title }}</h4>
    </a>
    <p class="text-xs text-slate-600 my-2">{{ description }}</p>
    <div class="flex items-center gap-2 flex-wrap text-[0.6rem] my-2">
      <span v-for="tag in tags" class="bg-slate-300 font-semibold rounded p-1">{{ tag }}</span>
    </div>
  </div>
</template>

<style scoped>
</style>

