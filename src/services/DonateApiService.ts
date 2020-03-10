import axios, { AxiosResponse } from 'axios';
import Dog from '@/models/dog';

const a = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_PATH,
});

function getDonateList(): Promise<AxiosResponse<any>> {
  return a.get('/api/donate/list');
}

export default { getDonateList };
