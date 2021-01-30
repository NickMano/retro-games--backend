const MongoLib = require('../lib/mongo');

const collection = 'api-keys';
const mongoDB = new MongoLib();

const apiKeysService = {
  async getApiKey({ token }) {
    const [apiKey] = await mongoDB.getAll(collection, { token });
    return apiKey;
  },
};

module.exports = apiKeysService;
