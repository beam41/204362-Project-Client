import { AxiosResponse } from 'axios';
import a from './_axios';
import util from './util';
import Dog from '@/models/dog';

function getDogList($store: any): Promise<AxiosResponse<Dog[]>> {
  return a.get('api/dog/list', util.headerWriter($store));
}
function getDogsRandomList(): Promise<AxiosResponse<Dog[]>> {
  return a.get('api/dog/random/3');
}

function getDog($store: any, id: string): Promise<AxiosResponse<Dog>> {
  return a.get(`api/dog/${id}`, util.headerWriter($store));
}

function postDog($store: any, dog: Dog): Promise<AxiosResponse<Dog>> {
  return a.post('api/dog', dog, util.headerWriter($store));
}

function delDog($store: any, id: string): Promise<AxiosResponse<Dog>> {
  return a.delete(`api/dog/${id}`, util.headerWriter($store));
}

function putDog($store: any, id: string, dog: Dog): Promise<AxiosResponse<Dog>> {
  // console.log(dog);
  return a.put(`api/dog/${id}`, dog, util.headerWriter($store));
}

function getDogListVisitor(): Promise<AxiosResponse<Dog[]>> {
  return a.get(`api/dog/visitor`);
}

function getDogVisitor(id: string): Promise<AxiosResponse<Dog>> {
  return a.get(`api/dog/visitor/${id}`);
}

export default {
  getDogList,
  getDog,
  postDog,
  delDog,
  putDog,
  getDogListVisitor,
  getDogVisitor,
  getDogsRandomList,
};
