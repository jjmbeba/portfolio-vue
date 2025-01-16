<script setup>
import ProjectCard from "./ProjectCard.vue";
import { api } from "../../convex/_generated/api.js";
import { useConvexQuery } from '@convex-vue/core';
import { FiLoader } from 'vue-icons-plus/fi'

const { data: projects, isLoading } = useConvexQuery(api.projects.get, {});
</script>

<template>
  <article class="mt-10">
    <div class="w-full sm:w-[44rem]">
      <h2 class="font-bold text-xl mb-3">Projects</h2>
      <div v-if="!isLoading" class="mt-3 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard
          v-for="project in projects"
          :title="project.title"
          :description="project.description"
          :tags="project.tags"
          :link="project.link"
        />
      </div>
    </div>
    <div v-if="isLoading" class="mt-10 w-full flex items-center justify-center gap-5">
      <FiLoader class="animate-spin w-5 h-5"/>
      Loading projects...
    </div>
  </article>
</template>

<style scoped>
</style>

