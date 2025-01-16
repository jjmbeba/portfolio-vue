<script setup>
import {BsGlobe} from 'vue-icons-plus/bs'
import SocialLinks from "./SocialLinks.vue";
import codeImage from '../images/code.jpg'
</script>

<template>
  <div class="flex flex-col sm:flex-row items-center max-w-full sm:max-w-[44rem] gap-4 sm:gap-0">
    <div class="flex flex-col gap-2 text-center sm:text-left">
      <h1 class="font-bold text-2xl">John Johnson Mbeba</h1>
      <p class="text-sm text-slate-500 max-w-xl">
        Full stack software engineer curious about new technologies and focused on
        building quality products
      </p>
      <p class="font-light text-xs text-slate-400 flex items-center justify-center sm:justify-start">
        <BsGlobe class="h-4 w-4 mr-2" />
        Nairobi, Kenya, EAT
      </p>
      <SocialLinks />
    </div>
    <img
      class="w-32 h-32 rounded-md mt-4 sm:mt-0"
      :src="codeImage"
      alt="profile"
    />
  </div>

</template>

<style scoped>

</style>

