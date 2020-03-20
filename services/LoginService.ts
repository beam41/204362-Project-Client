import a from './_axios';

function login($store: any, username: string, password: string): Promise<any> {
  return a.post('user/login', { username, password }).then((val) => {
    console.log(val.data);
    // @ts-ignore
    $store.commit('LOGIN', val.data);
    return val;
  });
}

export default { login };
