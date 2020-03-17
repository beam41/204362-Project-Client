import Vue from 'vue';
import Vuex from 'vuex';
import User from '@/models/User';
import am from './AdminMutation';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    login: {
      loggedIn: false,
      firstName: null,
      lastName: null,
      username: null,
      userType: null,
      deptNo: null,
      token: null,
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
        userType: null,
        deptNo: null,
        token: null,
      } as User;
    },
  },
});

export default store;
