const request = require('supertest');
const { expect: chaiExpect } = require('chai');  // ← RENAME

const API = 'https://jsonplaceholder.typicode.com';

describe('API: Users Endpoint', () => {
  it('GET /users → returns 10 users', async () => {
    const res = await request(API).get('/users');
    chaiExpect(res.status).to.equal(200);
    chaiExpect(res.body).to.have.lengthOf(10);
    chaiExpect(res.body[0]).to.have.property('name');
  });

  it('GET /users/1 → returns Leanne Graham', async () => {
    const res = await request(API).get('/users/1');
    chaiExpect(res.status).to.equal(200);
    chaiExpect(res.body.name).to.equal('Leanne Graham');
  });

  it('POST /posts → creates post', async () => {
    const res = await request(API)
      .post('/posts')
      .send({ title: 'QA Test', body: 'Automation', userId: 1 });
    chaiExpect(res.status).to.equal(201);
    chaiExpect(res.body.title).to.equal('QA Test');
  });
});