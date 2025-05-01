import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routtes'
import { createPinia } from 'pinia'


import persistPinia from 'pinia-plugin-persistedstate'


const app=createApp(App)
const pinia = createPinia()

pinia.use(persistPinia)
app.use(pinia)
app.use(router)
app.mount('#app')
