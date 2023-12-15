import request from 'supertest';
import app from '../index';

describe('GET /api', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/api');
    expect(response.status).toBe(200);
  });
});

describe('GET to /api/images', () => {
  const filename = 'fjord';

  it('should return an resized image when valid params passed', async () => {
    const width = 100;
    const height = 100;

    const res = await request(app).get(
      `/api/images?filename=${filename}&width=${width}&height=${height}`
    );

    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toBe('image/jpeg');
  });

  it('should return 400 when no params passed', async () => {
    const res = await request(app).get(`/api/images?filename=${filename}`);
    expect(res.status).toBe(400);
  });
});
