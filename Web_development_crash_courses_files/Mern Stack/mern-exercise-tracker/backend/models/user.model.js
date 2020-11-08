const moongose = require("mongoose");

const Schema = moongose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
      trim: true,
      minLength: 3
    },
  },
  {
    timestamps: true,
  }
);

const User = moongose.model("User", userSchema);

module.exports = User;
