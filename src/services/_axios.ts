import axios from 'axios';
import store from '@/store';

export default axios.create({
  baseURL: process.env.VUE_APP_BACKEND_PATH,
});

export function headerWriter() {
  // dynamically write header
  return {
    headers: {
      Authorization: `Bearer ${store.state.login.token}`,
    },
  };
}
