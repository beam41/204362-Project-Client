import axios from 'axios';

export default axios.create({
  baseURL: process.env.VUE_APP_BACKEND_PATH,
});

export function headerWriter($store: any) {
  // dynamically write header
  return {
    headers: {
      // @ts-ignore
      Authorization: `Bearer ${$store.state.login.token}`,
    },
  };
}
