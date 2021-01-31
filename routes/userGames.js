const express = require('express');
const protectRoutes = require('../utils/middleware/protectRoutes');

const userGamesServices = require('../services/userGames');

const {
  userGameIdSchema,
  createUserGameSchema,
} = require('../utils/schemas/userGames');
const { userIdSchema } = require('../utils/schemas/users');

const validationHandler = require('../utils/middleware/validationHandler');
const cacheResponse = require('../utils/cacheResponse');
const { FIVE_MINUTES_IN_SECONDS } = require('../utils/time');

const userGamesApi = (app) => {
  const router = express.Router();
  app.use('/api/user-games', router);

  router.use(protectRoutes);

  router.get(
    '/',
    validationHandler({ userId: userIdSchema }, 'query'),
    async (req, res, next) => {
      cacheResponse(res, FIVE_MINUTES_IN_SECONDS);

      const { userId } = req.query;

      try {
        const games = await userGamesServices.getUserGames({ userId });
        res.status(200).json({
          data: games,
          message: 'user games listed',
        });
      } catch (err) {
        next(err);
      }
    },
  );

  router.post(
    '/',
    validationHandler(createUserGameSchema),
    async (req, res, next) => {
      const { body: userGame } = req;

      try {
        const createdUserGameId = await userGamesServices.createUserGame({ userGame });

        res.status(201).json({
          data: createdUserGameId,
          message: 'user game created',
        });
      } catch (err) {
        next(err);
      }
    },
  );

  router.delete(
    '/:userGameId',
    validationHandler({ userGameId: userGameIdSchema }, 'params'),
    async (req, res, next) => {
      const { userGameId } = req.params;

      try {
        const deletedUserGameId = await userGamesServices.deleteUserGame({ userGameId });

        res.status(200).json({
          data: deletedUserGameId,
          message: 'user game deleted',
        });
      } catch (err) {
        next(err);
      }
    },
  );
};

module.exports = userGamesApi;
