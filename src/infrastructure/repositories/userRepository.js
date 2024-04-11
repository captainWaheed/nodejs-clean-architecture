const users = [];

function getAll() {
  return users;
}

function create(user) {
  users.push(user);
  return user;
}

module.exports = {
  getAll,
  create,
};
