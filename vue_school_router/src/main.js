import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AppLink from "@/components/AppLink.vue";

const app = createApp(App)
    .use(router)
    .component('AppLink', AppLink)
    .mount('#app')
