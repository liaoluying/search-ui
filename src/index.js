//入口文件
import Vue from 'vue'

//导入路由模块,安装路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入自己的路由模块
import router from './router.js'

//注册VUEX
import Vuex from 'vuex'
Vue.use(Vuex)

import ElementUI from 'element-ui';
Vue.use(ElementUI,{size:'small',zIndex:3000});

import axios from 'axios'
Vue.prototype.$http = axios

import 'element-ui/lib/theme-chalk/index.css';
import app from './app.vue';

var vm = new Vue({
    el: '#app',
    render:(h)=>h(app),
    router
})