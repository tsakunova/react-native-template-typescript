import config from 'react-native-ultimate-config';

import { Api, HttpClient } from 'api/generated/swagger';


const axios = new HttpClient({
  baseURL: config.BASE_URL,
  timeout: 10000,
});

export const api = new Api(axios);

export * from 'api/generated/swagger';
