const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/examen")
  .then(() => console.log("Conexion a la BD exitosa."))
  .catch((error) => console.error("Error al conectarse a la DB.", error));
