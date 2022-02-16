const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongo.config");

require("./routes/pirata-type.routes")(app);
require("./routes/piratas.routes")(app);

app.listen(8000, () =>
  console.log("El servidor está ejecutandose en el puerto 8000.")
);
