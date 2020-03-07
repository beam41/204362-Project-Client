import Vue from 'vue';
import VueRouter from 'vue-router';

import Listdog from '@/components/AdminDog/Listdog.vue';
import ListDonate from '@/components/AdminDonate/ListDonate.vue';
import Test from '@/components/CustomComponent/Test.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/admin/dog/list',
    name: 'list-dog',
    meta: { layout: 'admin' },
    component: Listdog,
  },
  {
    path: '/admin/donate/list',
    name: 'list-donate',
    meta: { layout: 'admin' },
    component: ListDonate,
  },
  {
    path: '/hidden/test',
    name: 'test',
    component: Test,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
