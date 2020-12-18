const dotenv = require('dotenv');
const { execSync } = require('child_process');
const { userInfo } = require('os');

const { username } = userInfo();
const userIdCmd = execSync(`id -u ${username}`).toString();
const userId = parseInt(userIdCmd, 10);
const PORT = userId + 20000;

const {
  NODE_ENV,
} = process.env;
const env = dotenv.config().parsed;

module.exports = {
  ...env,
  NODE_ENV,
  PORT,
};
