/* eslint-disable no-underscore-dangle */
const assert = require('assert');
const proxyquire = require('proxyquire');

const { gamesMock, gameWithoutIdMock, gamesServiceMock } = require('../utils/mocks/gamesMock');
const testServer = require('../utils/testServer');

describe('routes - games', () => {
  const route = proxyquire('../routes/games', {
    '../services/games': gamesServiceMock,
  });

  const request = testServer(route);

  describe('GET /games', () => {
    it('should respond with status code 200', (done) => {
      request.get('/api/games').expect(200, done);
    });

    it('should respond with the list of games', (done) => {
      request.get('/api/games').end((err, res) => {
        if (err) done(err);

        assert.deepStrictEqual(res.body, {
          data: gamesMock,
          message: 'games listed',
        });

        done();
      });
    });
  });

  describe('GET /games/:id', () => {
    it('should respond with status code 200', (done) => {
      request.get(`/api/games/${gamesMock[0]._id}`).expect(200, done);
    });

    it('should respond with the filtered game', (done) => {
      request.get(`/api/games/${gamesMock[0]._id}`).end((err, res) => {
        if (err) done(err);

        assert.deepStrictEqual(res.body, {
          data: gamesMock[0],
          message: 'game retrieved',
        });

        done();
      });
    });
  });

  describe('POST /games', () => {
    it('should respond with status code 201', (done) => {
      request.post('/api/games')
        .send(gameWithoutIdMock)
        .expect(201, done);
    });

    it('should respond with the created game', (done) => {
      request.post('/api/games')
        .send(gameWithoutIdMock)
        .end((err, res) => {
          if (err) done(err);

          assert.deepStrictEqual(res.body, {
            data: gamesMock[0]._id,
            message: 'game created',
          });

          done();
        });
    });
  });

  describe('DELETE /games/:gameId', () => {
    const gameId = gamesMock[0]._id;

    it('should respond with status code 200', (done) => {
      request.delete(`/api/games/${gameId}`)
        .expect(200, done);
    });

    it('should respond with the id of deleted game', (done) => {
      request.delete(`/api/games/${gameId}`)
        .end((err, res) => {
          if (err) done(err);

          assert.deepStrictEqual(res.body, {
            data: gameId,
            message: 'game deleted',
          });

          done();
        });
    });
  });
});
