const express = require('express');
const { config } = require('./config/index');
const gamesApi = require('./routes/games');
const {
  logErrors,
  errorHandler,
} = require('./utils/middleware/errorHandlers');

const app = express();

app.use(express.json());
gamesApi(app);
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
