const express = require('express');
const { config } = require('./config/index');
const gamesApi = require('./routes/games');

const app = express();

gamesApi(app);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
