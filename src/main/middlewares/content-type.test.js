const request = require('supertest')
const app = require('../config/app')

describe('Content-Type Middleware', () => {
  test('Should return json content-type as default', async () => {
    app.get('/test/content-type', (req, res) => {
      res.send('')
    })

    await request(app)
      .get('/test/content-type')
      .expect('content-type', /json/)
  })

  test('Should return xml content-type if forced', async () => {
    app.get('/test/content-type-forced', (req, res) => {
      res.type('xml')
      res.send('')
    })

    await request(app)
      .get('/test/content-type-forced')
      .expect('content-type', /xml/)
  })
})
