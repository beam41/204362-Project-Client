import Vue from 'vue';
import './registerServiceWorker';

import AdminLayout from './components/Layout/Admin.vue';
import UserLayout from './components/Layout/User.vue';
import DefaultLayout from './components/Layout/Default.vue';
import App from './App.vue';

import router from './router';

Vue.component('admin-layout', AdminLayout);
Vue.component('user-layout', UserLayout);
Vue.component('default-layout', DefaultLayout);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
