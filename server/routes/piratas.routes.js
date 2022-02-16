const {
  listar,
  crear,
  editar,
  obtener,
  eliminar,
} = require("../controllers/piratas.controller");

module.exports = (app) => {
  app.get("/api/piratas", listar);
  app.post("/api/piratas", crear);
  app.put("/api/piratas/:id", editar);
  app.get("/api/piratas/:id", obtener);
  app.delete("/api/piratas/:id", eliminar);
};
