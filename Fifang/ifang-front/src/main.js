import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Login from './components/auth/login.vue'



createApp(App).mount('#app')

createApp(Login).mount('#login')
