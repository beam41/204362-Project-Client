import { AxiosResponse } from 'axios';
import a from './_axios';
import util from './util';
import News from '@/models/news';

function getNewsList($store: any): Promise<AxiosResponse<News[]>> {
  return a.get('api/news/list', util.headerWriter($store));
}

function getNewsListVisitor(): Promise<AxiosResponse<News[]>> {
  return a.get('api/news/visitor');
}
function getNewsVisitor(id: string): Promise<AxiosResponse<News>> {
  return a.get(`api/news/visitor/${id}`);
}
function getNewNewsList(): Promise<AxiosResponse<News[]>> {
  return a.get('api/news/visitor/3');
}

function getNews($store: any, id: string): Promise<AxiosResponse<News>> {
  return a.get(`api/news/${id}`, util.headerWriter($store));
}

function postNews($store: any, news: News): Promise<AxiosResponse<News>> {
  return a.post('api/news', news, util.headerWriter($store));
}

function delNews($store: any, id: string): Promise<AxiosResponse<News>> {
  return a.delete(`api/news/${id}`, util.headerWriter($store));
}

function putNews($store: any, id: string, news: News): Promise<AxiosResponse<News>> {
  return a.put(`api/news/${id}`, news, util.headerWriter($store));
}

function acceptNews($store: any, id: string, news: News): Promise<AxiosResponse<News>> {
  return a.patch(`api/news/${id}`, news, util.headerWriter($store));
}

export default {
  getNewsList,
  getNews,
  postNews,
  delNews,
  putNews,
  acceptNews,
  getNewsListVisitor,
  getNewsVisitor,
  getNewNewsList,
};
