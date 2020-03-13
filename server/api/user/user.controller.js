const User = require('./user.model');
const APIError = require('../../helpers/APIError');
const httpStatus = require('http-status');

/**
 * Load user and append to req.
 *  * @property {number} req.query.id - Number of users to be skipped.
 * @returns {User}
 */
function load(req, res, next, id) {
  User.findOne({
    where: {
      id,
    },
  })
    .then((user) => {
      if (!user) {
        return next(new APIError('User not exist', httpStatus.NOT_FOUND, true));
      }
      req.user = user; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get user
 * @returns {User}
 */
function get(req, res) {
  return res.json(req.user);
}

/**
 * Create new user
 * @property {string} req.body.firstName - The username of user.
 * @property {string} req.body.lastName - The mobileNumber of user.
 * @returns {User}
 */
function create(req, res, next) {
  const { firstName, lastName, userName, password } = req.body;

  User.create({ firstName, lastName, userName, password })
    .then(jane => res.json(jane))
    .catch(err => next(err));
}

/**
 * Update existing user
 * @property {string} req.body.firstName - The username of user.
 * @property {string} req.body.lastName - The mobileNumber of user.
 * @returns {User}
 */
function update(req, res, next) {
  const { firstName, lastName, userName, password } = req.body;
  const user = req.user;

  user.firstName = firstName;
  user.lastName = lastName;
  user.userName = userName;
  user.password = password;

  user
    .save()
    .then(savedUser => res.json(savedUser))
    .catch(e => next(e));
}

/**
 * Get user list.
 * @property {number} req.query.offset - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
function list(req, res, next) {
  const { limit = 50, offset = 0, where, order } = req.query;
  User.findAll({
    limit: Number(limit),
    offset: Number(offset),
    where,
    order,
  })
    .then(users => res.json(users))
    .catch(e => next(e));
}

/**
 * Delete user.
 * @returns {User}
 */
function remove(req, res, next) {
  const user = req.user;
  user
    .destroy()
    .then(deletedUser => res.json(deletedUser))
    .catch(e => next(e));
}

module.exports = {
  load,
  get,
  create,
  update,
  list,
  remove,
};
