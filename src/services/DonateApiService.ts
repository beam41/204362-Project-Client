import { AxiosResponse } from 'axios';
import Donate from '@/models/donate';
import a, { headerWriter } from './_axios';

function getDonateList(): Promise<AxiosResponse<Donate[]>> {
  return a.get('api/donate/list', headerWriter());
}

function getDonate(id: string): Promise<AxiosResponse<Donate>> {
  return a.get(`api/donate/${id}`, headerWriter());
}

function postDonate(don: Donate): Promise<AxiosResponse<Donate>> {
  return a.post('api/donate', don, headerWriter());
}

function delDonate(id: string): Promise<AxiosResponse<Donate>> {
  return a.delete(`api/donate/${id}`, headerWriter());
}

function putDonate(id: string, don: Donate): Promise<AxiosResponse<Donate>> {
  return a.put(`api/donate/${id}`, don, headerWriter());
}

export default {
  getDonateList,
  getDonate,
  postDonate,
  delDonate,
  putDonate,
};
