const PATH = '/api/administration';
import { request } from 'utils/request';

export const administrationApi = {
  getAppConfiguration: () => request.get(`${PATH}/appConfig`)
}