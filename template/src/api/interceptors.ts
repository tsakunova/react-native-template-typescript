import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import noop from 'lodash/noop';
import config from 'react-native-ultimate-config';

import { } from 'consts';
import { store } from 'store';
import { ACCESS_TOKEN, REFRESH_TOKEN, readFormSecureStorage } from 'storage';
import { getHost } from 'utils/getHost';

import { api } from './index';


const checkIsHomeServer = (axiosConfig: AxiosRequestConfig<any>) =>
  (getHost(axiosConfig.url!) || axiosConfig.baseURL!).includes(config.BASE_URL);

const handleError = async (error: AxiosError) => {
  if (
    error?.response?.status === 401
    && checkIsHomeServer(error?.config)
    && error?.config?.url !== '/Account/Refresh' //NOTE: avoid request infinity loop
  ) {
    try {
      const refreshToken = await readFormSecureStorage(REFRESH_TOKEN) as string;
      // const auth = await api.account.refresh({ refreshToken });
      // store.login(auth);
      // return api.http.instance.request({
      //   ...error.response?.config,
      //   headers: {
      //     ...error.response?.config.headers,
      //     Authorization: `Bearer ${auth.accessToken}`,
      //   },
      // });
    } catch {
      store.logout();
      return;
    }
  }
  return Promise.reject(error);
};

const handleRequest = async(requestConfig: AxiosRequestConfig) => {
  const token = await readFormSecureStorage(ACCESS_TOKEN).catch(noop);

  if (checkIsHomeServer(requestConfig)) {
    return {
      ...requestConfig,
      headers: {
        ...requestConfig.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }
  return requestConfig;
};

const handleResponse = (resp: AxiosResponse) => resp.data;

api.http.instance.interceptors.request.use(handleRequest, handleError);
api.http.instance.interceptors.response.use(handleResponse, handleError);
