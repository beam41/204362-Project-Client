import Vue from 'vue';
import './registerServiceWorker';
// @ts-ignore
import VueProgressiveImage from 'vue-progressive-image';
import App from './App.vue';

import router from './router';
import store from './store';

Vue.use(VueProgressiveImage);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
