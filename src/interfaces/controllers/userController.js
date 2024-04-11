const getAllUsersUseCase = require("../../application/useCases/getAllUsers");
const createUserUseCase = require("../../application/useCases/createUser");

async function getAllUsers(req, res) {
  try {
    const users = await getAllUsersUseCase.execute();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

async function createUser(req, res) {
  try {
    const { name, email } = req.body;
    const newUser = await createUserUseCase.execute(name, email);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  getAllUsers,
  createUser,
};
