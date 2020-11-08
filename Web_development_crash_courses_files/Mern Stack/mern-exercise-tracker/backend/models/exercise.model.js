const moongose = require("mongoose");

const Schema = moongose.Schema;

const exerciseSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      require: true,
    },
    date: {
      type: Date,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Exercise = moongose.model("Exercise", exerciseSchema);

module.exports = Exercise;
