const validate = () => false;

const validationHandler = (schema, check = 'body') => (req, res, next) => {
  const error = validate(req[check], schema);

  if (error) {
    next(new Error(error));
  } else {
    next();
  }
};

module.exports = validationHandler;
