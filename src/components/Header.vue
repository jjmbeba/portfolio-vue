<script setup>
import {BsGlobe} from 'vue-icons-plus/bs'
import SocialLinks from "./SocialLinks.vue";
import codeImage from '../images/code.jpg'
</script>

<template>
  <div class="flex items-center max-w-[44rem]">
    <div class="flex flex-col gap-2">
      <h1 class="font-bold text-2xl">John Johnson Mbeba</h1>
      <p class="text-sm text-slate-500 max-w-xl">
        Full stack software engineer curious about new technologies and focused on
        building quality products
      </p>
      <p class="font-light text-xs text-slate-400 flex items-center">
        <BsGlobe class="h-4 w-4 mr-2" />
        Nairobi, Kenya, EAT
      </p>
      <SocialLinks />
    </div>
    <img
        class="w-32 h-32 rounded-md"
        :src="codeImage"
        alt="profile"
    />
  </div>

</template>

<style scoped>

</style>