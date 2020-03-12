import axios, { AxiosResponse } from 'axios';
import Donate from '@/models/donate';
import a from './_axios';

function getDonateList(): Promise<AxiosResponse<Donate[]>> {
  return a.get('/api/donate/list');
}

function getDonate(id: string): Promise<AxiosResponse<Donate>> {
  return a.get(`/api/donate/${id}`);
}

function postDonate(don: Donate): Promise<AxiosResponse<Donate>> {
  return a.post('api/donate', don);
}

function delDonate(id: string): Promise<AxiosResponse<Donate>> {
  return a.delete(`/api/donate/${id}`);
}

function putDonate(id: string, don: Donate): Promise<AxiosResponse<Donate>> {
  return a.put(`/api/donate/${id}`, don);
}

export default {
  getDonateList,
  getDonate,
  postDonate,
  delDonate,
  putDonate,
};
