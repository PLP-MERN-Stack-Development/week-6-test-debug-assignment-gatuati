const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const Bug = require('../../src/models/Bug');
const bugRoutes = require('../../src/routes/bugRoutes');

const app = express();
app.use(express.json());
app.use('/api/bugs', bugRoutes);

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/bug-tracker-test');
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
});

test('POST /api/bugs creates a bug', async () => {
  const res = await request(app)
    .post('/api/bugs')
    .send({ title: 'Test bug', description: 'Test desc' });

  expect(res.statusCode).toBe(201);
  expect(res.body.title).toBe('Test bug');
});
