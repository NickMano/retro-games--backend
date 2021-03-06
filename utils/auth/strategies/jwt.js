const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom');

const usersService = require('../../../services/users');
const { config } = require('../../../config');

passport.use(
  new Strategy({
    secretOrKey: config.authJwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (tokenPayload, cb) => {
    try {
      const user = await usersService.getUser({ email: tokenPayload.email });

      if (!user) {
        cb(boom.unauthorized(), false);
      }

      delete user.password;

      cb(null, { ...user, scopes: tokenPayload.scopes });
    } catch (error) {
      cb(error);
    }
  }),
);
