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
}

module.exports = gamesApi