const Joi = require('joi');

module.exports = {
  // POST /api/auth/login
  login: {
    body: {
      userName: Joi.string().required(),
      password: Joi.string().required()
    }
  }
};
