module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: 'latest',
      skipMD5: true
    },
    instance: {
      dbName: 'test'
    },
    autoStart: false
  }
}
