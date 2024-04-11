const users = [];

function getUsers(req, res) {
  res.json(users);
}

function createUser(req, res) {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);

  res.status(201).json(newUser);
}

module.exports = {
  getUsers,
  createUser,
};
