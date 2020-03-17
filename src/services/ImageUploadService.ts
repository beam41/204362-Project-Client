import { AxiosResponse } from 'axios';
import store from '@/store';
import a from './_axios';

function postImage(img: any): Promise<AxiosResponse<any>> {
  const formData = new FormData();
  // @ts-ignore
  formData.append('data', img);
  return a.post('api/image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${store.state.login.token}`,
    },
  });
}

export default { postImage };
