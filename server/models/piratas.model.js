const moongose = require("mongoose");

const PiratasSchema = new moongose.Schema({
  name: {
    type: String,
    required: [true, "campo requerido."],
    minlength: [3, " Debe tener al menos tres caractéres."],
  },

  imagen: {
    type: String,
    required: [true, "campo requerido."],
    minlength: [3, " Debe tener al menos tres caractéres."],
  },

  treasure: {
    type: Number,
    required: [true, "campo requerido."],
  },

  catch: {
    type: String,
    required: [true, "campo requerido."],
  },

  position: {
    type: String,
    required: [true, "campo requerido."],
    minlength: [3, " Debe tener al menos tres caractéres."],
  },

  features: {
    type: String,
    required: [true, "campo requerido."],
    minlength: [3, " Debe tener al menos tres caractéres."],
  },
});

const Piratas = moongose.model("piratas", PiratasSchema);

module.exports = Piratas;
