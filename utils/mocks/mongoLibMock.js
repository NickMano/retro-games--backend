/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/no-extraneous-dependencies
const sinon = require('sinon');

const { gamesMock, filteredGamesMock } = require('./gamesMock');

const getAllStub = sinon.stub();
getAllStub.withArgs('games').resolves(gamesMock);

const tagQuery = { tags: { $in: ['Drama'] } };
getAllStub.withArgs('games', tagQuery).resolves(filteredGamesMock('Drama'));

const createStub = sinon.stub().resolves(gamesMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  create(collection, data) {
    return createStub(collection, data);
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongoLibMock,
};
