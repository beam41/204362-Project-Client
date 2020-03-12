import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: null as string | null,
    token: null as string | null,
  },
  mutations: {},
});

export default store;
