const userService = require("../services/userService");

async function execute() {
  return userService.getAllUsers();
}

module.exports = { execute };
