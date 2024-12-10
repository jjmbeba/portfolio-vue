<script setup>
import About from "./components/About.vue";
import Header from "./components/Header.vue";
import Education from "./components/Education.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
</script>

<template>
  <main class="w-full my-16 flex flex-col items-center">
    <Header />
    <About />
    <Education />
    <Skills />
    <Projects />
  </main>
</template>