<script setup>
import { BsGoogle, BsTelephone, BsGithub, BsLinkedin } from 'vue-icons-plus/bs'

const logos = [
  { name: BsGoogle, alt: "Gmail logo", link: "mailto:jjmbeba@gmail.com" },
  { name: BsTelephone, alt: "Phone icon", link: "tel:+254717777418" },
  { name: BsGithub, alt: "Github logo", link: "https://github.com/jjmbeba" },
  {
    name: BsLinkedin,
    alt: "LinkedIn logo",
    link: "https://www.linkedin.com/in/john-mbeba-85967124b",
  },
];
</script>

<template>
  <div class="mt-2 flex items-center justify-center sm:justify-start gap-2 flex-wrap">
    <a v-for="logo in logos" :href="logo.link" target="_blank" class="mb-2 sm:mb-0">
      <div class="border border-slate-400 p-1 rounded cursor-pointer hover:bg-slate-100 transition-colors">
        <component :is="logo.name" class="h-4 w-4"/>
      </div>
    </a>
  </div>
</template>

