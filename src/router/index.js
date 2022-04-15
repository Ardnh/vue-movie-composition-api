import { createWebHistory, createRouter } from 'vue-router'
import Home from '../pages/Home.vue'
import Detail from '../pages/Detail.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        name:'detail',
        path:'/detail/:id',
        component: Detail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router