const { body, param } = require("express-validator");
const {
  findAllMonedas,
  createMoneda,
  infoRutas,
  modificar,
  eliminar,
} = require("../controllers/monedas");
const { validate } = require("../helpers/validate");

const router = require("express").Router();

router.get("/", infoRutas);
router.get("/listar", findAllMonedas);

router.post(
  "/guardar",
  body("nombre")
    .isString()
    .isLength({ min: 3 })
    .withMessage("la longitud minima del nombre es 3 caracteres"),
  body("simbolo")
    .isLength({ max: 1 })
    .withMessage("El simbolo debe se un solo caracter"),
  validate,
  createMoneda
);

router.put(
  "/modificar/:id",
  param("id").isInt().withMessage("El id debe ser un numero entero"),
  validate,
  modificar
);

router.delete(
  "/eliminar/:id",
  param("id").isInt().withMessage("El id debe ser un numero entero"),
  validate,
  eliminar
);
exports.router = router;
