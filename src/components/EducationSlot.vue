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
  <div class="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
    <h3 class="font-bold text-[0.9rem] text-black mb-1 sm:mb-0">
      {{ school }}
    </h3>
    <span class="text-sm">{{ range }}</span>
  </div>
  <span class="text-xs mt-1 sm:mt-0">
    {{ course }}
  </span>
</template>

