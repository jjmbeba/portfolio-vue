<script setup>
import About from "./components/About.vue";
import Header from "./components/Header.vue";
import Education from "./components/Education.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
</script>

<template>
  <main class="w-full px-4 sm:px-6 lg:px-8 my-8 sm:my-12 lg:my-16 flex flex-col items-center">
    <div class="w-full max-w-[44rem]">
      <Header />
      <About />
      <Education />
      <Skills />
      <Projects />
    </div>
  </main>
</template>

