const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

const validate = (data, schema) => {
  const { error } = joi.validate(data, schema);
  return error;
};

const validationHandler = (schema, check = 'body') => (req, res, next) => {
  const error = validate(req[check], schema);

  if (error) {
    next(boom.badRequest(error));
  } else {
    next();
  }
};

module.exports = validationHandler;
