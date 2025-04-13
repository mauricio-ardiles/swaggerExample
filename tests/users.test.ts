import request from 'supertest';
import app from '../src/app';


jest.mock('../src/services/userService', () => ({
  getAllUsers: jest.fn(() => [{ id: 123, name: 'MockUser' }]),
  createUser: jest.fn((name) => ({ id: 456, name })),
}));

describe('User API con mocks', () => {
  it('GET /api/users - debería devolver usuarios mockeados', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body[0].name).toBe('MockUser');
  });

  it('POST /api/users - debería crear usuario mockeado', async () => {
    const res = await request(app).post('/api/users').send({ name: 'Nuevo' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Nuevo');
  });
});


describe('User API', () => {
  it('GET /api/users - debería devolver lista de usuarios', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/users - debería crear un usuario', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Nuevo Usuario' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('Nuevo Usuario');
  });
});