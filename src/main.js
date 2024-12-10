import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createConvexVue } from "@convex-vue/core";

const convexVue = createConvexVue({
    convexUrl: import.meta.env.VITE_CONVEX_URL,
});

const app = createApp(App);

app.use(convexVue).mount('#app')
