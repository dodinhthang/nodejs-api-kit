const Sequelize = require('sequelize');

const config = require('./database');

let sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url);
} else {
  sequelize = new Sequelize(
    config.connection.database,
    config.connection.user,
    config.connection.password, {
      host: config.connection.host,
      dialect: config.client,
      // operatorsAliases: false,
      logging: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    });
}
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.'); // eslint-disable-line no-console
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err); // eslint-disable-line no-console
  });

module.exports = sequelize;
