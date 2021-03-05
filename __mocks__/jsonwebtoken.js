module.exports = {
  token: '',

  async sign (id) {
    this.id = id
    return this.token
  }
}
