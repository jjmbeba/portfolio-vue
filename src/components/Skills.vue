<script setup>
const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "NextJS",
  "Python",
  "Flask",
  "TailwindCSS",
];

</script>

<template>
  <article class="mt-10">
    <h2 class="font-bold text-xl">Skills</h2>
    <div class="mt-3 w-[44rem] flex items-center gap-4 flex-wrap">
      <span v-for="skill in skills" class="p-1 bg-slate-950 text-slate-50 rounded text-xs">
          {{ skill }}
        </span>
    </div>
  </article>
</template>