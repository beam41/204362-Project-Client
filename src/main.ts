import Vue from 'vue';
import './registerServiceWorker';
// @ts-ignore
import VueProgressiveImage from 'vue-progressive-image';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlus,
  faSearch,
  faNewspaper,
  faPaw,
  faInbox,
  faDonate,
  faArrowDown,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';

import router from './router';
import store from './store';

library.add(faPlus, faSearch, faNewspaper, faPaw, faInbox, faDonate, faArrowDown, faChevronDown);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueProgressiveImage);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
