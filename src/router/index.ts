import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const adminRoutes = [
  {
    path: 'dog/list',
    meta: { title: 'Dog' },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "ADogList" */ '@/components/AdminDog/DogList.vue'),
  },
  {
    path: 'donate/list',
    meta: { title: 'Donate' },
    component: () =>
      // eslint-disable-next-line
      import(
        // eslint-disable-next-line
        /* webpackChunkName: "ADonateList" */ '@/components/AdminDonate/DonateList.vue'
      ),
  },
  {
    path: 'report/list',
    meta: { title: 'Report' },
    component: () =>
      // eslint-disable-next-line
      import(
        // eslint-disable-next-line
        /* webpackChunkName: "AReportList" */ '@/components/AdminReport/ReportList.vue'
      ),
  },
  {
    path: 'news/list',
    meta: { title: 'News' },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "ANewsList" */ '@/components/AdminNews/NewsList.vue'),
  },
];

const routes = [
  {
    path: '/admin',
    meta: { preTitle: 'Admin Dashboard' },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "ALayout" */ '@/components/Layout/Admin.vue'),
    children: adminRoutes,
  },
  {
    path: '/',
    meta: { preTitle: 'MheanMaa' },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "ULayout" */ '@/components/Layout/User.vue'),
    // children: userRoutes,
  },
  {
    path: '/hidden/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "Test" */ '@/components/Shared/Test.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  try {
    document.title = `${to.matched[0].meta.preTitle}: ${to.matched[1].meta.title}`;
  } finally {
    next();
  }
});

export default router;
