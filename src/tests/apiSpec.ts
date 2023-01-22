import supertest from 'supertest';
import server from '../index';

const request = supertest(server.app);
const status: number = 200;

describe('Testing the server response', () => {
  it('get the response of /api', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(status);
  });
  it('get the response of api/resize', async () => {
    const response = await request.get('/api/resize');
    expect(response.status).toBe(401);
  });
});

describe('Testing ImageProcessing endpoint responses based on several inputs', () => {
  it('testing validate name', async () => {
    const response = await request.get(
      '/api/resize?name=&width=200&height=200'
    );
    expect(response.status).toBe(401);
  });

  it('test validate params width', async () => {
    const response = await request.get(
      '/api/resize?name=pic&width=10&height=200'
    );
    expect(response.status).toBe(401);
  });

  it('tesing validate params height', async () => {
    const response = await request.get(
      '/api/resize?name=pic&width=1050&height=0'
    );
    expect(response.status).toBe(401);
  });

  it('testing all params validation', async () => {
    const response = await request.get('/api/resize?name=&width=&height=');
    expect(response.status).toBe(401);
  });

  it('test validate params pass', async () => {
    const response = await request.get(
      '/api/resize?name=palmtunnel&width=500&height=1000'
    );
    expect(response.status).toBe(status);
  });
});
