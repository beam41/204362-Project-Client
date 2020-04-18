import Vue from 'vue';
// @ts-ignore
import { VLazyImagePlugin } from 'v-lazy-image';
// @ts-ignore
import VueTimeago from 'vue-timeago';
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
  faBars,
  faMars,
  faVenus,
  faTimes,
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
  faBars,
  faMars,
  faVenus,
  faTimes,
);

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VLazyImagePlugin);

Vue.use(VueTimeago, {
  name: 'Timeago',
  locale: 'th',
});
