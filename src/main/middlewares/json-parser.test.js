const request = require('supertest')
const app = require('../config/app')

describe('JSON Parse Middleware', () => {
  test('Should parse body in JSON', async () => {
    app.post('/test/json', (req, res) => {
      res.send(req.body)
    })

    await request(app)
      .post('/test/json')
      .send({ name: 'Victor' })
      .expect({ name: 'Victor' })
  })
})
