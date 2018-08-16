export default class MongoGist {
  private accessToken: string

  constructor({ accessToken }: Options) {
    this.accessToken = accessToken
  }
}

interface Options {
  accessToken: string
}
