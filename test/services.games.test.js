const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLibMock');

const { gamesMock } = require('../utils/mocks/gamesMock');

describe('services - games', () => {
  const gamesService = proxyquire('../services/games', {
    '../lib/mongo': MongoLibMock,
  });

  describe('when getGames method is called', async () => {
    it('should call the getAll MongoLib method', async () => {
      await gamesService.getGames({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of games', async () => {
      const result = await gamesService.getGames({});
      const expected = gamesMock;
      assert.deepStrictEqual(result, expected);
    });
  });
});
