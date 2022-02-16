const { listar } = require("../controllers/piratas-type.controller");

module.exports = (app) => {
  app.get("/api/piratas-type", listar);
};
