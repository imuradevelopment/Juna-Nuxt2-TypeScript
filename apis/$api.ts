/* eslint-disable */
// prettier-ignore
import { AspidaClient, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './v1/auth/jwt/refresh'
// prettier-ignore
import { Methods as Methods1 } from './v1/tags'
// prettier-ignore
import { Methods as Methods2 } from './v1/users'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1/auth/jwt/refresh/'
  const PATH1 = '/v1/tags/'
  const PATH2 = '/v1/users/'
  const GET = 'GET'
  const POST = 'POST'

  return {
    v1: {
      auth: {
        jwt: {
          refresh: {
            get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
              fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
            $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
              fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
            post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
              fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json(),
            $post: (option: { body: Methods0['post']['reqBody'], config?: T }) =>
              fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json().then(r => r.body),
            $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
              `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      },
      tags: {
        get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json(),
        $get: (option?: { query?: Methods1['get']['query'], config?: T }) =>
          fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
        post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
          fetch<Methods1['post']['resBody']>(prefix, PATH1, POST, option).json(),
        $post: (option: { body: Methods1['post']['reqBody'], config?: T }) =>
          fetch<Methods1['post']['resBody']>(prefix, PATH1, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      },
      users: {
        get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
          fetch<Methods2['get']['resBody']>(prefix, PATH2, GET, option).json(),
        $get: (option?: { query?: Methods2['get']['query'], config?: T }) =>
          fetch<Methods2['get']['resBody']>(prefix, PATH2, GET, option).json().then(r => r.body),
        post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
          fetch<Methods2['post']['resBody']>(prefix, PATH2, POST, option).json(),
        $post: (option: { body: Methods2['post']['reqBody'], config?: T }) =>
          fetch<Methods2['post']['resBody']>(prefix, PATH2, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
          `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
