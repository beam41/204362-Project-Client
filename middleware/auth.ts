import User from '../models/User';
import LoginServ from '../services/LoginService';

class Auth {
  static checker({ route, store, redirect }: any) {
    if (/\/admin/.test(route.matched[0].path) && !/\/admin\/login/.test(route.matched[0].path)) {
      const storage = localStorage.getItem('mm-login');
      if (storage) {
        const login: User = JSON.parse(storage) as User;
        if (login.loggedIn === false) redirect('/admin/login');
        else {
          store.commit('LOGIN', login);
          LoginServ.test(store).catch((err) => {
            // console.dir(err);
            if (err) {
              localStorage.removeItem('mm-login');
              redirect('/admin/login');
            }
          });
        }
      } else redirect('/admin/login');
    }
  }
}

export default Auth.checker;
