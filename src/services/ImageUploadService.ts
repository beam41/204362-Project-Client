import { AxiosResponse } from 'axios';
import a from './_axios';

function postImage(img: any): Promise<AxiosResponse<any>> {
  const formData = new FormData();
  // @ts-ignore
  formData.append('data', img);
  return a.post('/api/image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export default { postImage };
