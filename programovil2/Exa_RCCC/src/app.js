const express = require("express");
const morgan = require("morgan");
const { db } = require("./config/db");
const app = express();
const port = process.env.PORT || 1235;

(async () => {
  try {
    await db.authenticate();
    console.log("conectado a la base de datos");
    //middlewares
    app.use(express.json());
    app.use(morgan("dev"));
    app.use(express.urlencoded({ extended: false }));

    //rutas
    app.use("/api/monedas", require("./routes/modenas").router);
    app.get("/api", (req, res) => {
      res.json({
        nombre: "Roberto Carlos Castillo",
        seccion: "1301",
        clase: "Programacion movil 2",
      });
    });
    //inicio app
    app.listen(port, () => {
      console.log(
        `servidor de roberto castillo iniciado en el puerto ${port}...`
      );
    });
  } catch (error) {
    console.log("error:", error.message);
  }
})();
