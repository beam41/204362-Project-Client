import { AxiosResponse } from 'axios';
import a, { headerWriter } from './_axios';
import News from '@/models/news';

function getNewsList($store: any): Promise<AxiosResponse<News[]>> {
  return a.get('api/news/list', headerWriter($store));
}

function getNewsListVisitor(): Promise<AxiosResponse<News[]>> {
  return a.get('api/news/visitor');
}

function getNews($store: any, id: string): Promise<AxiosResponse<News>> {
  return a.get(`api/news/${id}`, headerWriter($store));
}

function postNews($store: any, news: News): Promise<AxiosResponse<News>> {
  return a.post('api/news', news, headerWriter($store));
}

function delNews($store: any, id: string): Promise<AxiosResponse<News>> {
  return a.delete(`api/news/${id}`, headerWriter($store));
}

function putNews($store: any, id: string, news: News): Promise<AxiosResponse<News>> {
  return a.put(`api/news/${id}`, news, headerWriter($store));
}

function acceptNews($store: any, id: string, news: News): Promise<AxiosResponse<News>> {
  return a.patch(`api/news/${id}`, news, headerWriter($store));
}

export default {
  getNewsList,
  getNews,
  postNews,
  delNews,
  putNews,
  acceptNews,
  getNewsListVisitor,
};
