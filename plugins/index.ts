import Vue from 'vue';
// @ts-ignore
import { VLazyImagePlugin } from 'v-lazy-image';
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
  faUser,
  faSignOutAlt,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faPlus,
  faSearch,
  faNewspaper,
  faPaw,
  faInbox,
  faDonate,
  faArrowDown,
  faChevronDown,
  faUser,
  faSignOutAlt,
  faCheck,
);

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VLazyImagePlugin);
