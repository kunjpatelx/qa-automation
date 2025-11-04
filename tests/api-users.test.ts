import request from 'supertest';
import { expect } from 'chai';  // ← CHAI

const API = 'https://jsonplaceholder.typicode.com';

describe('API: Users Endpoint', () => {
  it('GET /users → returns 10 users', async () => {
    const res = await request(API).get('/users');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.lengthOf(10);
    expect(res.body[0]).to.have.property('name');
  });

  it('GET /users/1 → returns Leanne Graham', async () => {
    const res = await request(API).get('/users/1');
    expect(res.status).to.equal(200);
    expect(res.body.name).to.equal('Leanne Graham');
  });

  it('POST /posts → creates post', async () => {
    const res = await request(API)
      .post('/posts')
      .send({ title: 'QA Test', body: 'Automation', userId: 1 });
    expect(res.status).to.equal(201);
    expect(res.body.title).to.equal('QA Test');
  });
});