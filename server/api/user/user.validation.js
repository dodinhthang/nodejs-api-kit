const Joi = require('joi');

module.exports = {
  // POST /api/users
  createUser: {
    body: {
      userName: Joi.string().required(),
      password: Joi.string().required(),
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      userName: Joi.string().required(),
      password: Joi.string().required(),
    },
    params: {
      userId: Joi.number().required()
    }
  },

};
