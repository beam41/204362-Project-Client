import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bb0c9a56 = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages_contact_index" */))
const _367885b9 = () => interopDefault(import('..\\pages\\dog\\index.vue' /* webpackChunkName: "pages_dog_index" */))
const _22af5fb0 = () => interopDefault(import('..\\pages\\donate\\index.vue' /* webpackChunkName: "pages_donate_index" */))
const _52015a0c = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages_news_index" */))
const _608157cb = () => interopDefault(import('..\\pages\\report\\index.vue' /* webpackChunkName: "pages_report_index" */))
const _8a693a26 = () => interopDefault(import('..\\pages\\test\\index.vue' /* webpackChunkName: "pages_test_index" */))
const _ea0d1ddc = () => interopDefault(import('..\\pages\\admin\\dog\\index.vue' /* webpackChunkName: "pages_admin_dog_index" */))
const _2da9ec92 = () => interopDefault(import('..\\pages\\admin\\donate\\index.vue' /* webpackChunkName: "pages_admin_donate_index" */))
const _71692fc5 = () => interopDefault(import('..\\pages\\admin\\login\\index.vue' /* webpackChunkName: "pages_admin_login_index" */))
const _e4c44c5a = () => interopDefault(import('..\\pages\\admin\\news\\index.vue' /* webpackChunkName: "pages_admin_news_index" */))
const _26fd01d2 = () => interopDefault(import('..\\pages\\admin\\report\\index.vue' /* webpackChunkName: "pages_admin_report_index" */))
const _4e4213f2 = () => interopDefault(import('..\\pages\\admin\\dog\\DogAddUpdate.ts' /* webpackChunkName: "pages_admin_dog_DogAddUpdate" */))
const _0739d9a5 = () => interopDefault(import('..\\pages\\admin\\donate\\DonateAddUpdate.ts' /* webpackChunkName: "pages_admin_donate_DonateAddUpdate" */))
const _05f48ffa = () => interopDefault(import('..\\pages\\admin\\dog\\_id.vue' /* webpackChunkName: "pages_admin_dog__id" */))
const _b6e3e442 = () => interopDefault(import('..\\pages\\admin\\donate\\_id.vue' /* webpackChunkName: "pages_admin_donate__id" */))
const _2b28b5ff = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _bb0c9a56,
    name: "contact"
  }, {
    path: "/dog",
    component: _367885b9,
    name: "dog"
  }, {
    path: "/donate",
    component: _22af5fb0,
    name: "donate"
  }, {
    path: "/news",
    component: _52015a0c,
    name: "news"
  }, {
    path: "/report",
    component: _608157cb,
    name: "report"
  }, {
    path: "/test",
    component: _8a693a26,
    name: "test"
  }, {
    path: "/admin/dog",
    component: _ea0d1ddc,
    name: "admin-dog"
  }, {
    path: "/admin/donate",
    component: _2da9ec92,
    name: "admin-donate"
  }, {
    path: "/admin/login",
    component: _71692fc5,
    name: "admin-login"
  }, {
    path: "/admin/news",
    component: _e4c44c5a,
    name: "admin-news"
  }, {
    path: "/admin/report",
    component: _26fd01d2,
    name: "admin-report"
  }, {
    path: "/admin/dog/DogAddUpdate",
    component: _4e4213f2,
    name: "admin-dog-DogAddUpdate"
  }, {
    path: "/admin/donate/DonateAddUpdate",
    component: _0739d9a5,
    name: "admin-donate-DonateAddUpdate"
  }, {
    path: "/admin/dog/:id",
    component: _05f48ffa,
    name: "admin-dog-id"
  }, {
    path: "/admin/donate/:id",
    component: _b6e3e442,
    name: "admin-donate-id"
  }, {
    path: "/",
    component: _2b28b5ff,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
