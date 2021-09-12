/* eslint-disable camelcase */
type Token = {
  token: string
}

export type Methods = {
  get: {
    query?: {
      limit: number
    }

    resBody: Token
  }

  post: {
    reqBody: {
      refreshToken: string
    }

    resBody: Token
    /**
     * reqHeaders(?): ...
     * reqFormat: ...
     * status: ...
     * resHeaders(?): ...
     * polymorph: [...]
     */
  }
}
