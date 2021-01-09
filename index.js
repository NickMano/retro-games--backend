const express = require('express');
const { config } = require('./config/index');
const gamesApi = require('./routes/games');

const app = express();
app.use(express.json());

gamesApi(app);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
