
import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const { APP_URL } = publicRuntimeConfig;

export const request = {
  get: (url: string) => fetch(`${APP_URL}${url}`),
  post: (url: string, data: any) => fetch(`${APP_URL}${url}`, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: data && JSON.stringify(data)
  })
}