const PATH = '/api/administration';
import { request } from 'utils/request';
import { IAppConfigDto } from 'types/administration';

export const administrationApi = {
  getAppConfiguration: () => request.get(`${PATH}/appConfig`),
  updateAppConfiguration: (data: IAppConfigDto) => request.post(`${PATH}/appConfig`, data),
}