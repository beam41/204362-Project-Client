import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/admin/dog/list',
    name: 'dog-list',
    meta: { layout: 'admin', title: 'Dog' },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "AdminDogList" */ '@/components/AdminDog/DogList.vue'),
  },
  {
    path: '/admin/donate/list',
    name: 'donate-list',
    meta: { layout: 'admin', title: 'Donate' },
    component: () =>
      // eslint-disable-next-line
      import(
        /* webpackChunkName: "AdminDonateList" */
        // eslint-disable-next-line
        '@/components/AdminDonate/DonateList.vue'
      ),
  },
  {
    path: '/admin/report/list',
    name: 'report-list',
    meta: { layout: 'admin', title: 'Report' },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "AdminReportList" */ '@/components/AdminReport/ReportList.vue'),
  },
  {
    path: '/admin/news/list',
    name: 'news-list',
    meta: { layout: 'admin', title: 'News' },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "AdminNewsList" */ '@/components/AdminNews/NewsList.vue'),
  },
  {
    path: '/hidden/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "Test" */ '@/components/CustomComponent/Test.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
