import Vue from 'vue';
import VueRouter from 'vue-router';

import Listdog from '@/components/AdminDog/Listdog.vue';
import AddUpdate from '@/components/AdminDog/AddUpdateDog.vue';
import ListDonate from '@/components/AdminDonate/ListDonate.vue';

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
  {
    path: '/listdonate',
    name: 'list-donate',
    component: ListDonate,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
