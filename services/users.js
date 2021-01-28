const bcrypt = require('bcrypt');
const MongoLib = require('../lib/mongo');

const collection = 'users';
const mongoDB = new MongoLib();

const usersService = {
  async getUser({ email }) {
    const [user] = await mongoDB.getAll(collection, { email });
    return user;
  },

  async createUser({ user }) {
    const { name, email, password } = user;
    const hashedPassword = await bcrypt.hash(password, 10);

    const createUserId = await mongoDB.create(collection, {
      name,
      email,
      password: hashedPassword,
    });
    return createUserId;
  },
};

module.exports = usersService;
