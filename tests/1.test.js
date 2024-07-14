const request = require('supertest')
const app = require('../server')

describe('Get Endpoints', () => {
  it('should get a 200', async () => {
    const res = await request(app).get('/healthcheck')
    expect(res.statusCode).toEqual(200)
  })
})
