import { AxiosResponse } from 'axios';
import Dog from '@/models/dog';
import a, { headerWriter } from './_axios';

function getDogList(): Promise<AxiosResponse<Dog[]>> {
  return a.get('api/dog/list', headerWriter());
}

function getDog(id: string): Promise<AxiosResponse<Dog>> {
  return a.get(`api/dog/${id}`, headerWriter());
}

function postDog(dog: Dog): Promise<AxiosResponse<Dog>> {
  return a.post('api/dog', dog, headerWriter());
}

function delDog(id: string): Promise<AxiosResponse<Dog>> {
  return a.delete(`api/dog/${id}`, headerWriter());
}

function putDog(id: string, dog: Dog): Promise<AxiosResponse<Dog>> {
  // console.log(dog);
  return a.put(`api/dog/${id}`, dog, headerWriter());
}
export default {
  getDogList,
  getDog,
  postDog,
  delDog,
  putDog,
};
