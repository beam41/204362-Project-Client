import store from '@/store';
import am from '@/store/AdminMutation';
import a from './_axios';

function login(username: string, password: string): Promise<any> {
  return a.post('user/login', { username, password }).then((val) => {
    store.commit(am.LOGIN, val.data);
  });
}

export default { login };
