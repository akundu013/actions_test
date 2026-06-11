const request = require('supertest');
const { describe, it, expect } = require('@jest/globals');
const app = require('./app');

describe('GET /', () => {
  it(`should return 'Hello.'`, async () => {
    const res = await request(app).get('/').expect(200);

    expect(res.text).toBe('Hello.');
  });
});
