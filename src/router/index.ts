import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';

import Listdog from '../components/Listdog.vue';
import AddUpdate from '../components/AddUpdateDog.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'listdog',
    component: Listdog,
  },
  {
    path: '/listdog',
    name: 'listdog',
    component: Listdog,
  },
  {
    path: '/add-update',
    name: 'add-update',
    component: AddUpdate,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
