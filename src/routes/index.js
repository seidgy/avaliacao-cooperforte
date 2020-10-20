import VueRouter from 'vue-router'
import Vue from 'vue'
import AppLogin from '../views/AppLogin.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: AppLogin},
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;