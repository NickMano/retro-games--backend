const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const usersService = require('../../../services/users');

passport.use(new BasicStrategy(async (email, password, cb) => {
  try {
    const user = await usersService.getUser({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return cb(boom.unauthorized(), false);
    }

    delete user.password;

    return cb(null, user);
  } catch (error) {
    return cb(error);
  }
}));
