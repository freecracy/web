import { createApp } from 'vue'

import App from './App.vue'
import Index from './Index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: App },
    { path: '/Login', component: () => import('./components/Login.vue') },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(Index)
app.use(router)
app.mount('#app')