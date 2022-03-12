require('./bootstrap');
import vue from 'vue';
window.Vue = vue;


import App from './components/App.vue';


//axios
import VueAxios from 'vue-axios';
import axios from 'axios';

//vue router

import VueRouter from 'vue-router';
import { routes } from './routes';
import Vue from 'vue';

vue.use(VueRouter);
vue.use(VueAxios, axios);
const router = new VueRouter({
 mode:'history',
 routes: routes
});

const app = new vue({
    el:'#app',
    router:router,
    render:h => h(App)
});