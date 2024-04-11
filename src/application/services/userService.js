const userRepository = require("../../infrastructure/repositories/userRepository");

function getAllUsers() {
  return userRepository.getAll();
}

function createUser(name, email) {
  const newUser = { id: Date.now(), name, email };
  return userRepository.create(newUser);
}

module.exports = {
  getAllUsers,
  createUser,
};
