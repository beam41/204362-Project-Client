import Vue from 'vue';
import Vuex from 'vuex';
import User from '@/models/User';
import am from './AdminMutation';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    login: {
      loggedIn: false,
      firstName: null as string | null,
      lastName: null as string | null,
      username: null as string | null,
      deptNo: null as number | null,
      token: null as string | null,
    } as User,
  },
  mutations: {
    [am.LOGIN](state, data: User) {
      state.login = { ...state.login, ...data, loggedIn: true };
    },
    [am.LOGOUT](state) {
      // resetti
      state.login = {
        loggedIn: false,
        firstName: null,
        lastName: null,
        username: null,
        deptNo: null,
        token: null,
      } as User;
    },
  },
});

export default store;
