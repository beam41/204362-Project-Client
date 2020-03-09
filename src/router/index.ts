import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const adminRoutes = [
  {
    path: 'dog/',
    meta: { title: 'Dog', pos: 1 },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "ADogList" */ '@/components/AdminDog/DogList.vue'),
  },
  {
    path: 'dog/:id',
    meta: { title: 'Dog', pos: 1 },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "ADogList" */ '@/components/AdminDog/DogAddUpdate.vue'),
  },
  {
    path: 'donate/',
    meta: { title: 'Donate', pos: 3 },
    component: () =>
      // eslint-disable-next-line
      import(
        // eslint-disable-next-line
        /* webpackChunkName: "ADonateList" */ '@/components/AdminDonate/DonateList.vue'
      ),
  },
  {
    path: 'report/',
    meta: { title: 'Report', pos: 2 },
    component: () =>
      // eslint-disable-next-line
      import(
        // eslint-disable-next-line
        /* webpackChunkName: "AReportList" */ '@/components/AdminReport/ReportList.vue'
      ),
  },
  {
    path: 'news/',
    meta: { title: 'News', pos: 0 },
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
