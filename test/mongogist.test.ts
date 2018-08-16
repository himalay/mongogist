import MongoGist from '../src/mongogist'

const { GITHUB_ACCESS_TOKEN: accessToken } = process.env

describe('MongoGist', () => {
  it('should be instantiable', () => {
    expect(new MongoGist({ accessToken })).toBeInstanceOf(MongoGist)
  })
})
