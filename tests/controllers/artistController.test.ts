import makeApp from '../../src/app';
import request from 'supertest';

describe('GET /users', () => {
  const app = makeApp();

  it('should return an empty array when no items exist', async () => {
    const response = await request(app).get('/api/artists').send();
    expect(response.body).toEqual([]);
  });

  it('should return an array of artists if available', async () => {
    await request(app).post('/api/artists').send({
      name: 'artist 1',
      origin: 'origin',
      yearFounded: 2000,
    });

    const response = await request(app).post('/api/artists').send();
    //TODO: assertion on response length
    //expect(response.body.length).toBeGreaterThan(0);
  });

  it('should return with a 200 status code', async () => {
    const response = await request(app).get('/api/artists').send();
    expect(response.statusCode).toBe(200);
  });

  it('should return with json int the content type header', async () => {
    const response = await request(app).get('/api/artists').send();
    expect(response.type).toEqual('application/json');
  });
});
