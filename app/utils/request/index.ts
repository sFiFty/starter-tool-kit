
import fetch from 'isomorphic-unfetch';

export const request = {
  get: (url: string) => fetch(url),
  post: (url: string, data: any) => fetch(url, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: data && JSON.stringify(data)
  })
}