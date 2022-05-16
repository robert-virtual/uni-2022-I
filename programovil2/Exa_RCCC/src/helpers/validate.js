const { request } = require("express");
const { validationResult } = require("express-validator");

exports.validate = (req = request, res, next) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.json(errores);
  }
  next();
};
