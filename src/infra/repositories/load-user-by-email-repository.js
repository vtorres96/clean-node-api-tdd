class LoadUserByEmailRepository {
  async load (email) {
    return null
  }
}
describe('Load User By Email Repository', () => {
  test('Should return null if no user is found', async () => {
    const sut = new LoadUserByEmailRepository()
    const user = await sut.load('invalid_email@gmail.com')
    expect(user).toBeNull()
  })
})
