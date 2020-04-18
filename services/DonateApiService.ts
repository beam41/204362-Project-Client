import { AxiosResponse } from 'axios';
import a from './_axios';
import util from './util';
import Donate from '@/models/donate';

function getDonateList($store: any): Promise<AxiosResponse<Donate[]>> {
  return a.get('api/donate/list', util.headerWriter($store));
}

function getDonateListVisitor(): Promise<AxiosResponse<Donate[]>> {
  return a.get('api/donate/visitor');
}
function getDonateRandomList(): Promise<AxiosResponse<Donate[]>> {
  return a.get('api/donate/random/3');
}

function getDonate($store: any, id: string): Promise<AxiosResponse<Donate>> {
  return a.get(`api/donate/${id}`, util.headerWriter($store));
}

function postDonate($store: any, don: Donate): Promise<AxiosResponse<Donate>> {
  return a.post('api/donate', don, util.headerWriter($store));
}

function delDonate($store: any, id: string): Promise<AxiosResponse<Donate>> {
  return a.delete(`api/donate/${id}`, util.headerWriter($store));
}

function putDonate($store: any, id: string, don: Donate): Promise<AxiosResponse<Donate>> {
  return a.put(`api/donate/${id}`, don, util.headerWriter($store));
}

function acceptDonate($store: any, id: string, don: Donate): Promise<AxiosResponse<Donate>> {
  return a.patch(`api/donate/${id}`, don, util.headerWriter($store));
}

export default {
  getDonateList,
  getDonate,
  postDonate,
  delDonate,
  putDonate,
  acceptDonate,
  getDonateListVisitor,
  getDonateRandomList,
};
