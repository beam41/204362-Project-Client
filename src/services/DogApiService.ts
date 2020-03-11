import axios, { AxiosResponse } from 'axios';
import Dog from '@/models/dog';

const a = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_PATH,
});

function getDogList(): Promise<AxiosResponse<Dog[]>> {
  return a.get('/api/dog/list');
}

function getDog(id: string): Promise<AxiosResponse<Dog>> {
  return a.get(`/api/dog/${id}`);
}

function postDog(dog: Dog): Promise<AxiosResponse<Dog>> {
  return a.post('api/dog/list');
}

export default { getDogList, getDog, postDog };
