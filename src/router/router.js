import VueRouter from 'vue-router'
import Login from '../Login.vue'
import way from '../components/search.vue'

var router = new VueRouter({
    routes:[
        {
            path: '/',
            redirect: '/login',
        },
        {
            path:'/cxdz',
            name: 'way',
            component: way,
        },
        {
            path:'/login',
            name: '登录',
            component: Login
        }
    ]
})

export default router