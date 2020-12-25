const gamesMock = require('../utils/mocks/gamesMock');

const gamesService = {
  async getGames() {
    const games = await Promise.resolve(gamesMock);
    return games || [];
  },

  async getGame() {
    const game = await Promise.resolve(gamesMock[0]);
    return game || {};
  },

  async createGame() {
    const createGameId = await Promise.resolve(gamesMock[0].id);
    return createGameId;
  },

  async updateGame() {
    const updatedGameId = await Promise.resolve(gamesMock[0].id);
    return updatedGameId;
  },

  async deleteGame() {
    const deletedGameId = await Promise.resolve(gamesMock[0].id);
    return deletedGameId;
  },
};

module.exports = gamesService;
