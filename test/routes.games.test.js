const assert = require('assert');
const proxyquire = require('proxyquire');

const { gamesMock, gamesServiceMock } = require('../utils/mocks/gamesMock');
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
        assert.deepStrictEqual(res.body, {
          data: gamesMock,
          message: 'games listed',
        });

        done();
      });
    });
  });
});
