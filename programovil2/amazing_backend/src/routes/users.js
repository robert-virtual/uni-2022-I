const User = require("../models/User");

const users = require("express").Router();

// obtener todos los usuarios
users.get("/", async (req, res) => {
  const users = await User.findAll({ attributes: { exclude: ["password"] } });
  res.json({ users });
});

// crear un usuario
users.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({ msg: "Usuario creado con exito", user });
  } catch (error) {
    res.json({ error: error.toString() });
  }
});

module.exports = users;
