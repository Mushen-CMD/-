import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import Vant from 'vant'
import 'vant/lib/index.css'
import './style.css'
import App from './App.vue'
import Login from './views/Login.vue'
import Chat from './views/Chat.vue'
import Contacts from './views/Contacts.vue'
import Moments from './views/Moments.vue'
import Profile from './views/Profile.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/chat', component: Chat },
  { path: '/contacts', component: Contacts },
  { path: '/moments', component: Moments },
  { path: '/profile', component: Profile },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(Vant)
  .mount('#app')