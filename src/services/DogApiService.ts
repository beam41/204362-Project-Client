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
  console.log(dog);
  return a.post('api/dog', dog);
}

function delDog(id: string): Promise<AxiosResponse<Dog>> {
  return a.delete(`/api/dog/${id}`);
}

export default {
  getDogList,
  getDog,
  postDog,
  delDog,
};
