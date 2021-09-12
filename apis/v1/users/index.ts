/* eslint-disable camelcase */
type User = {
    user_id: string,
    email: string,
    username: string,
    description: string,
    is_organizer: boolean
}

export type Methods = {
  get: {
    query?: {
      limit: number
    }

    resBody: User
  }

  post: {
    reqBody: {
      name: string
    }

    resBody: User
    /**
     * reqHeaders(?): ...
     * reqFormat: ...
     * status: ...
     * resHeaders(?): ...
     * polymorph: [...]
     */
  }
}
