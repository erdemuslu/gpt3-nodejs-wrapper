const dotenv = require('dotenv');

const {
  NODE_ENV = 'development',
  PORT = 8383,
} = process.env;
const env = dotenv.config().parsed;

module.exports = {
  ...env,
  NODE_ENV,
  PORT,
};
