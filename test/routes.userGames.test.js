/* eslint-disable no-underscore-dangle */
const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  userGamesMock,
  userGameWithoutIdMock,
  filteredUserGamesMock,
  userGamesServiceMock,
} = require('../utils/mocks/userGamesMock');
const testServer = require('../utils/testServer');

describe('routes - user-games', () => {
  const route = proxyquire('../routes/userGames', {
    '../services/userGames': userGamesServiceMock,
  });

  const request = testServer(route);

  describe('GET /user-games?userId=', () => {
    it('should respond with status code 200', (done) => {
      request.get(`/api/user-games?userId=${userGamesMock[0].userId}`).expect(200, done);
    });

    it('should respond with the list of user games', (done) => {
      request.get(`/api/user-games?userId=${userGamesMock[0].userId}`).end((err, res) => {
        if (err) done(err);

        assert.deepStrictEqual(res.body, {
          data: filteredUserGamesMock(userGamesMock[0].userId),
          message: 'user games listed',
        });

        done();
      });
    });
  });

  describe('POST /user-games', () => {
    it('should respond with status code 201', (done) => {
      request.post('/api/user-games')
        .send(userGameWithoutIdMock)
        .expect(201, done);
    });

    it('should respond with the created game', (done) => {
      request.post('/api/user-games')
        .send(userGameWithoutIdMock)
        .end((err, res) => {
          if (err) done(err);

          assert.deepStrictEqual(res.body, {
            data: userGamesMock[0]._id,
            message: 'user game created',
          });

          done();
        });
    });
  });
});
