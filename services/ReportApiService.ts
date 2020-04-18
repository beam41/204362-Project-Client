import { AxiosResponse } from 'axios';
import a from './_axios';
import util from './util';
import Report from '~/models/report';

function postReport(
  title: string,
  body: string,
  reporter: string,
  reporterContact: string,
  img: any,
): Promise<AxiosResponse<Report>> {
  const formData = new FormData();
  // @ts-ignore
  formData.append('title', title);
  formData.append('body', body);
  formData.append('reporter', reporter);
  formData.append('reporterContact', reporterContact);
  formData.append('img', img);
  return a.post('api/report', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

function getReportList($store: any): Promise<AxiosResponse<Report[]>> {
  return a.get('api/report/list', util.headerWriter($store));
}

function getReport($store: any, id: string): Promise<AxiosResponse<Report>> {
  return a.get(`api/report/${id}`, util.headerWriter($store));
}

function acceptReport($store: any, id: string, rep: Report): Promise<AxiosResponse<Report>> {
  return a.patch(`api/report/${id}`, rep, util.headerWriter($store));
}

function deleteReport($store: any, id: string): Promise<AxiosResponse<Report>> {
  return a.delete(`api/report/${id}`, util.headerWriter($store));
}

export default { postReport, getReportList, getReport, acceptReport, deleteReport };
