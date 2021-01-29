const MongoLib = require('../lib/mongo');

const collection = 'user-games';
const mongoDB = new MongoLib();

const userGamesService = {
  async getUserGames({ userId }) {
    const query = userId && { userId };
    const userGames = await mongoDB.getAll(collection, query);
    return userGames || [];
  },

  async createUserGame({ userGame }) {
    const createUserGameId = await mongoDB.create(collection, userGame);
    return createUserGameId;
  },

  async deleteUserGame({ userGameId }) {
    const deletedUserGameId = await mongoDB.delete(collection, userGameId);
    return deletedUserGameId;
  },
};

module.exports = userGamesService;
