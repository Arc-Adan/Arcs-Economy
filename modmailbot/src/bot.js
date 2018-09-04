const Eris = require('eris');
const config = require('./config');

const bot = new Eris.CommandClient(config.token, {}, {
  prefix: config.prefix,
  ignoreSelf: true,
  ignoreBots: false,
  defaultHelpCommand: false,
  getAllUsers: true,
  defaultCommandOptions: {
    caseInsensitive: true,
  },
});

module.exports = bot;
