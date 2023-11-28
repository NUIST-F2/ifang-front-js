import './assets/main.css'
import Antd from 'ant-design-vue';
import { createApp } from 'vue'
import App from './App.vue'
import login from './components/auth/login.vue'
import 'ant-design-vue/dist/reset.css';


createApp(login).use(Antd).mount('#login')
