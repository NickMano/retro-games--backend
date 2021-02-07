/* eslint-disable consistent-return */
const passport = require('passport');
const boom = require('@hapi/boom');

require('../auth/strategies/jwt');

const protectRoutes = (req, res, next) => {
  passport.authenticate('jwt', (error, user) => {
    if (error || !user) return next(boom.unauthorized());

    req.login(user, { session: false }, (err) => {
      if (err) return next(err);
      next();
    });
  })(req, res, next);
};

module.exports = protectRoutes;
