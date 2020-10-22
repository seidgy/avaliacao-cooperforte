import VueRouter from 'vue-router'
import Vue from 'vue'
import AppLogin from '../views/AppLogin.vue'
import AppDashboard from '../views/AppDashboard.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: AppLogin},
    { path: '/dashboard', component: AppDashboard},
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;