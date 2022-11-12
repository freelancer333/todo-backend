import request from 'supertest'
import App from '../../src/index-2'

describe('GET / - health check', () => {
  it('Hello API Request', async () => {
    const express = new App()
    const app = express.app
    const result = await request(app).get('/health')
    expect(result.body).toEqual({ status: 'UP' })
    expect(result.statusCode).toEqual(200)
  })
})
