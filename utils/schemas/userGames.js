const joi = require('@hapi/joi');

const { gameIdSchema } = require('./games');
const { userIdSchema } = require('./users');

const userGameIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createUserGameSchema = {
  gameId: gameIdSchema,
  userId: userIdSchema,
};

module.exports = {
  userGameIdSchema,
  createUserGameSchema,
};
