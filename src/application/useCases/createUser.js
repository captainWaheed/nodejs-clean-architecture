const userService = require("../services/userService");

async function execute(name, email) {
  if (!name || !email) {
    throw new Error("Name and email are required");
  }

  return userService.createUser(name, email);
}

module.exports = { execute };
