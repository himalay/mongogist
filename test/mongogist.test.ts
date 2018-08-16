import MongoGist from '../src/mongogist'

describe('Dummy test', () => {
  it('MongoGist is instantiable', () => {
    const name = 'Himalay'
    expect(new MongoGist(name)).toBeInstanceOf(MongoGist)
  })

  it('MongoGist.sayHello says "Hello <name>"', () => {
    const name = 'Himalay'
    const dummy = new MongoGist(name)
    expect(dummy.sayHello()).toEqual(`Hello ${name}`)
  })
})
