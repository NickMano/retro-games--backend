const boom = require('@hapi/boom');

const scopesValidationHandler = (allowedScopes) => (req, res, next) => {
  if (!req.user || !req.user.scopes) {
    next(boom.unauthorized('Missing scopes'));
  }
  console.log('🚀 ~ file: scopesValidationHandler.js ~ line 5 ~ scopesValidationHandler ~ req.user.scopes', req.user.scopes);

  const hasAccess = allowedScopes
    .map((allowedScope) => req.user.scopes.includes(allowedScope))
    .find((allowed) => Boolean(allowed));

  if (hasAccess) next();
  else next(boom.unauthorized('Insufficient Scopes'));
};

module.exports = scopesValidationHandler;
