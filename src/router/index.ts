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
    meta: { title: 'Dog Info', pos: 1, sub: true },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "ADogAU" */ '@/components/AdminDog/DogAddUpdate.vue'),
  },
  {
    path: 'donate/:id',
    meta: { title: 'Donate', pos: 3 },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "ADonateList" */ '@/components/AdminDonate/DonateList.vue'),
  },
  {
    path: 'donate/',
    meta: { title: 'Donate', pos: 3 },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "ADonateList" */ '@/components/AdminDonate/DonateList.vue'),
  },
  {
    path: 'report/',
    meta: { title: 'Report', pos: 2 },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "AReportList" */ '@/components/AdminReport/ReportList.vue'),
  },
  {
    path: 'news/',
    meta: { title: 'News', pos: 0 },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "ANewsList" */ '@/components/AdminNews/NewsList.vue'),
  },
];

const userRoutes = [
  {
    path: '/home',
    meta: { preTitle: 'home' },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "UHome" */ '@/components/User/Home.vue'),
  },
  {
    path: '/news',
    meta: { preTitle: 'news' },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "UNewsList" */ '@/components/User/News/NewsList.vue'),
  },
  {
    path: '/dogs',
    meta: { preTitle: 'dogs' },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "UDogList" */ '@/components/User/Dog/DogList.vue'),
  },
  {
    path: '/donate',
    meta: { preTitle: 'donate' },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "UDonate" */ '@/components/User/Donate.vue'),
  },
  {
    path: '/contact',
    meta: { preTitle: 'contact' },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "UContact" */ '@/components/User/Contact.vue'),
  },
  {
    path: '/report',
    meta: { preTitle: 'report' },
    component: () =>
      // eslint-disable-next-line
      import(/* webpackChunkName: "UReport" */ '@/components/User/Report.vue'),
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
    children: userRoutes,
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
