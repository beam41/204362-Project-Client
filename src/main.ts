import Vue from 'vue';
import './registerServiceWorker';
import App from './App.vue';

import router from './router';

Vue.component('admin-layout', () => import('./components/Layout/Admin.vue'));
Vue.component('user-layout', () => import('./components/Layout/User.vue'));
Vue.component('default-layout', () => import('./components/Layout/Default.vue'));

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
