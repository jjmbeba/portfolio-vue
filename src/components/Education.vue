<script>

import EducationSlot from "../components/EducationSlot.vue";

export default {
  name: "EducationList",
  components: {
    EducationSlot,
  },
  data() {
    return {
      education: [
        {
          school: "Techsavanna Software Institute",
          course: "Advanced Software Engineering",
          range: "2025-2025"
        },
        {
          school: "Moringa School",
          course: "Software Engineering",
          range: "2023-2024",
        },
        {
          school: "Catholic University of Eastern Africa",
          course: "Bachelor's Degree in Computer Science",
          range: "2019-2023",
        },
        {
          school: "Starehe Boys Centre",
          course: "High School education",
          range: "2015-2018",
        },
      ],
    };
  },
};
</script>

<template>
  <article class="mt-10">
    <h2 class="font-bold text-xl">Education</h2>
    <div class="w-full sm:w-[44rem] text-sm text-slate-500 mt-3 space-y-3">
      <EducationSlot
        v-for="item in education"
        :key="item.school"
        :school="item.school"
        :course="item.course"
        :range="item.range"
      />
    </div>
  </article>

</template>

