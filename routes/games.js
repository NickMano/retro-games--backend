const express = require('express')
const gamesMock = require('../utils/mocks/gamesMock')

const gamesApi = (app) => {
    const router = express.Router()
    app.use('/api/games', router)

    router.get('/', async (req, res, next) => {
        try {
            const games = await Promise.resolve(gamesMock)
            res.status(200).json({
                data: games,
                message: 'games listed',
            })
        } catch (err) {
            next(err)
        }
    })

    router.get('/:gameId', async function(req, res, next) {
        try {
          const games = await Promise.resolve(gamesMock[0]);
    
          res.status(200).json({
            data: games,
            message: 'game retrieved'
          });
        } catch (err) {
          next(err);
        }
      });
    
    
      router.post('/', async function(req, res, next) {
        try {
          const createdGameId = await Promise.resolve(gamesMock[0].id);
    
          res.status(201).json({
            data: createdGameId,
            message: 'game created'
          });
        } catch (err) {
          next(err);
        }
      });
    
    
      router.put('/:gameId', async function(req, res, next) {
        try {
          const updatedGameId = await Promise.resolve(gamesMock[0].id);
    
          res.status(200).json({
            data: updatedGameId,
            message: 'game updated'
          });
        } catch (err) {
          next(err);
        }
      });
    
      router.delete('/:gameId', async function(req, res, next) {
        try {
          const deletedGameId = await Promise.resolve(gamesMock[0].id);
    
          res.status(200).json({
            data: deletedGameId,
            message: 'game deleted'
          });
        } catch (err) {
          next(err);
        }
      });
}

module.exports = gamesApi