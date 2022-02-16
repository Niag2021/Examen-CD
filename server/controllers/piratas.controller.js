const Piratas = require("../models/piratas.model");
const piratasRoutes = require("../routes/piratas.routes");

module.exports.crear = (req, res) => {
  const piratas = req.body;
  Piratas.create(piratas)
    .then((piratas) =>
      res.json({ ok: true, message: "Pirata creado.!!!", data: piratas, }))
    .catch((error) => {
      if (error.name == "ValidationError")
        res .status(200).json({ ok: false, message: error.message, error: error });
      else {
        res.status(200).json({ ok: false, message: "Error al guardar al pirata.!!!" });
      }
    });
};

module.exports.editar = (req, res) => {
  Piratas.findByIdAndUpdate(req.params.id, req.body)
    .then((data) =>
      res.json({ error: false, message: "Pirata actualizado.!!!", data: req.body, }))
    .catch((error) => {
      if (error.name == "ValidationError")
        res.json({ ok: false, message: error.message, error: error });
      else {
        res.json({ ok: false, message: "Error al guardar al pirata.!!!" });
      }
    });
};

module.exports.listar = (req, res) => {
  Piratas.find()
    .then((data) =>
      res.json({ error: false, message: "Listado de Piratas.", data: data })
    )
    .catch((error) => {
      res.json({ ok: false, message: "Error al obtener el listado de piratas.", });
    });
};

module.exports.obtener = (req, res) => {
  Piratas.findById(req.params.id)
    .then((data) => res.json({ error: false, message: "Piratas.", data: data }))
    .catch((error) => {
      res.json({ ok: false, message: "Error al obtener al pirata.!!!" });
    });
};

module.exports.eliminar = (req, res) => {
  Piratas.findByIdAndDelete(req.params.id)
    .then((data) =>
      res.json({ error: false, message: "Pirata eliminado.!!!", data: data, }))
    .catch((error) => {
      res.json({ ok: false, message: "Error al eliminar al pirata." });
    });
};
