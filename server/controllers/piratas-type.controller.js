const PollType = require("../models/piratas.type.model");

module.exports.listar = (req, res) => {
  PiratasType.find()
    .then((resp) => {
      res.json({ error: false, message: "Listado de piratas!!!.", data: resp, });
    })
    .catch((error) =>
      res.json({ error: true, message: " Error al listar los piratas.!!!" })
    );
};
