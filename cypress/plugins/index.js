const cucumber = require('cypress-cucumber-preprocessor').default;
const { initPlugin } = require('cypress-failed-log');

module.exports = (on, config) => {
  on('task', cucumber());
  initPlugin(on, config);
};





