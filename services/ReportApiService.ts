import { AxiosResponse } from 'axios';
import a from './_axios';
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

export default { postReport };
