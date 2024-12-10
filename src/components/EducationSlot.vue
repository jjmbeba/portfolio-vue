<script>
export default {
  name: "EducationSlot",
  props: {
    school: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    range: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="w-full flex items-center justify-between">
    <h3 class="font-bold text-[0.9rem] text-black">
      {{ school }}
    </h3>
    <span>{{ range }}</span>
  </div>
  <span class="text-xs">
  {{ course }}
</span>
</template>