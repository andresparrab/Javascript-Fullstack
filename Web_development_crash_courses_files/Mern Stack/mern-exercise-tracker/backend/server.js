


const express = require("express");
// const bodyparser = require('body-parser')
const cors = require("cors");
const mongoose = require("mongoose"); // this is what we need to connect to our mongoDB

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // OBS!! dont need body-parser, is alreade integrated in express. instead for import bodyparser and app.use(bpdy-parser.json())

const uri = process.env.ATLAS_URI; // this  get the .nev file and read the ATLAS_ URI variable
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MONGODB databae connection established succesfully."); // this is what connect to the mondo db database and once is connectet console.log()  amessage
});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);   // this is for when we type /users in the browser it will load ./routes/users

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
