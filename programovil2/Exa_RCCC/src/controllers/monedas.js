const { request, response } = require("express");
const Moneda = require("../models/Moneda");

exports.infoRutas = async (req = request, res = response) => {
  res.json({
    msg: "modulo moneda",
    rutas: ["/listar", "/guardar", "/modificar", "/eliminar"],
  });
};

exports.createMoneda = async (req = request, res = response) => {
  res.json(await Moneda.create(req.body));
};
exports.findAllMonedas = async (req = request, res = response) => {
  res.json(await Moneda.findAll());
};

exports.modificar = async (req = request, res = response) => {
  const { id } = req.params;
  await Moneda.update(req.body, {
    where: {
      id,
    },
  });
  res.json({ msg: "moneda actiualizada" });
};
exports.eliminar = async (req = request, res = response) => {
  const { id } = req.params;
  await Moneda.destroy({
    where: {
      id,
    },
  });
  res.json({ msg: "Moneda eliminada" });
};
