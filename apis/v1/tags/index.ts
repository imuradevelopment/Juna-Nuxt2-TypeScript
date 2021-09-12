type Tags = {
  id: number
  name: string
}

export type Methods = {
  get: {
    query?: {
      limit: number
    }

    resBody: Tags[]
  }

  post: {
    reqBody: {
      name: string
    }

    resBody: Tags
    /**
     * reqHeaders(?): ...
     * reqFormat: ...
     * status: ...
     * resHeaders(?): ...
     * polymorph: [...]
     */
  }
}
