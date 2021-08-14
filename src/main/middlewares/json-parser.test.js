const request = require('supertest')
const app = require('../config/app')

describe('JSON Parse Middleware', () => {
  test('Should parse body in JSON', async () => {
    app.post('/test_json_parser', (req, res) => {
      res.send(req.body)
    })

    await request(app)
      .post('test_json_parser')
      .send({ name: 'Victor' })
      .expect({ name: 'Victor' })
  })
})
