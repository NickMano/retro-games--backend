/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
const userGamesMock = [
  {
    _id: '100000000000000000000000',
    userId: '600000000000000000000001',
    gameId: 'ffffffffffffffffffffffff',
  },
  {
    _id: '110000000000000000000000',
    userId: '600000000000000000000001',
    gameId: 'ffffffffffffffffffffffff',
  },
  {
    _id: '111000000000000000000000',
    userId: '600000000000000000000002',
    gameId: 'ffffffffffffffffffffffff',
  },
];

const userGameWithoutIdMock = {
  userId: '00000000000000000000000f',
  gameId: 'ffffffffffffffffffffffff',
};

const filteredUserGamesMock = (userId) => userGamesMock.filter(
  (userGame) => userGame.userId === userId,
);

const userGamesServiceMock = {
  async getUserGames({ userId }) {
    return Promise.resolve(filteredUserGamesMock(userId));
  },

  async createUserGame({ userGame }) {
    return Promise.resolve(userGamesMock[0]._id);
  },

  async deleteUserGame({ userGameId }) {
    return Promise.resolve(userGameId);
  },
};

module.exports = {
  userGamesMock,
  userGameWithoutIdMock,
  filteredUserGamesMock,
  userGamesServiceMock,
};
