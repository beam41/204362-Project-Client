import User from '@/models/User';

export const state = () => ({
  login: {
    loggedIn: false,
    firstName: null,
    lastName: null,
    username: null,
    userType: null,
    deptNo: null,
    token: null,
  } as User,
});

export const mutations = {
  LOGIN(state: any, data: User) {
    state.login = { ...state.login, ...data, loggedIn: true };
    localStorage.setItem('mm-login', JSON.stringify(state.login));
  },
  LOGOUT(state: any) {
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
    localStorage.removeItem('mm-login');
  },
};
