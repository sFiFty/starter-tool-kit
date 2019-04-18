
import fetch from 'isomorphic-unfetch';

export const request = {
  get: (url: string) => fetch(url)
}