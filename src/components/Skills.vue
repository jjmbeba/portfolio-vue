<script setup>
const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "NextJS",
  "Python",
  "Flask",
  "TailwindCSS",
  "Laravel",
  "NextJs"
];
</script>

<template>
  <article class="mt-10">
    <h2 class="font-bold text-xl mb-3">Skills</h2>
    <div class="w-full sm:w-[44rem] flex items-center justify-center sm:justify-start gap-4 flex-wrap">
      <span v-for="skill in skills" class="p-1 bg-slate-950 text-slate-50 rounded text-xs">
        {{ skill }}
      </span>
    </div>
  </article>
</template>

