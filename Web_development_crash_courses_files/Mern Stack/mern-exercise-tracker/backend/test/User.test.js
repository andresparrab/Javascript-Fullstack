const Chai = require("chai");
const { describe, it } = require("mocha");
// import Chai from "chai";
const app = require("../server.js");
// import { describe, it as test } from "mocha";
//import app from "../server.js";
const chaiHttp = require("chai-http");
//import chaiHttp from "chai-http";
//import { request, response } from "express";

const StatusCode = require("../configuration/StatusCode.js");
//import StatusCode from "../configuration/StatusCode.js";
Chai.should();
Chai.use(chaiHttp);

const randomString = Math.random().toString(36).substring(7);
const userID = "5fa64b8e352d6c7ce2ebd342";
const user2 = {
  username: randomString,
  description: randomString,
  duration: 125,
  timestamps: new Date(),
};
const user = {
  usernamehahaa: randomString, // This MSUT BE THE SAME vame as req.body.usernamehaha
};

const testtingNonExistentRoute = () => {
  describe("Testing route does not exist", () => {
    console.log("this is the app: ", app);
    it(" Expecting 404 not found", (done) => {
      console.log("inside IT function------------------------->");
      Chai.request(app)
        .get(`/${randomString}`)
        .end((request, response) => {
          console.log("INSIED THE END ");
          response.should.have.status(StatusCode.NOT_FOUND); // ASK TEACHER WHY a.status dont work!!!
          done();
        });
    });
  });
};

const getUsers = () => {
  describe(" Fetching all users(GET)", () => {
    it("Expecting to return all the users", (done) => {
      Chai.request(app)
        .get("/users")
        .end((error, response) => {
          response.should.have.status(StatusCode.OK);
          response.body.should.be.a("array");
          console.log("Then number os users are: ", response.body.length);
          response.body.length.should.be.eq(response.body.length);
          done();
        });
    });
  });
};

describe("Testing the user API route", () => {
  testtingNonExistentRoute();

  getUsers();
});
