const express = require("express");
const userController = require("./src/interfaces/controllers/userController");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/users", userController.getAllUsers);
app.post("/users", userController.createUser);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
