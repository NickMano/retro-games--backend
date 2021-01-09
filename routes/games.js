const express = require('express');
const gamesServices = require('../services/games');

const gamesApi = (app) => {
  const router = express.Router();
  app.use('/api/games', router);

  router.get('/', async (req, res, next) => {
    const { tags } = req.query;

    try {
      const games = await gamesServices.getGames({ tags });
      res.status(200).json({
        data: games,
        message: 'games listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:gameId', async (req, res, next) => {
    const { gameId } = req.params;

    try {
      const games = await gamesServices.getGame(gameId);

      res.status(200).json({
        data: games,
        message: 'game retrieved',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async (req, res, next) => {
    const { body: game } = req;

    try {
      const createdGameId = await gamesServices.createGame(game);

      res.status(201).json({
        data: createdGameId,
        message: 'game created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:gameId', async (req, res, next) => {
    const { movieId } = req.params;
    const { body: movie } = req;

    try {
      const updatedGameId = await gamesServices.updateGame(movieId, movie);

      res.status(200).json({
        data: updatedGameId,
        message: 'game updated',
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:gameId', async (req, res, next) => {
    const { movieId } = req.params;

    try {
      const deletedGameId = await gamesServices.deleteGame(movieId);

      res.status(200).json({
        data: deletedGameId,
        message: 'game deleted',
      });
    } catch (err) {
      next(err);
    }
  });
};

module.exports = gamesApi;
