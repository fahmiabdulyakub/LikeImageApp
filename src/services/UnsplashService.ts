import {IPhoto} from '@types';
import axios from 'axios';
import Config from 'react-native-config';

export const getPhotos = () => {
  return new Promise<IPhoto[]>(resolve => {
    axios
      .get(`${Config.BASE_URL}/photos`, {
        params: {
          client_id: Config.API_KEY,
        },
      })
      .then(result => {
        resolve(result.data);
      })
      .catch(error => {
        resolve([]);
        console.log(error);
      });
  });
};
