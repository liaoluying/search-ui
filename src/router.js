import VueRouter from 'vue-router'
import search from './components/search.vue'

var router = new VueRouter({
    routes: [
        {path: '/', component: search}
    ]
})

export default router