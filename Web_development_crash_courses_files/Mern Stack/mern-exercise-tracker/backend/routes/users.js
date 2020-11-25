const router = require("express").Router(); // this is  a new route we create for ./routes/users
let User = require("../models/user.model");



router.route("/").get((req, res) => {
  User.find()                                 // this is a mongoose method that will get a list of all the Users from the mongoDB atlasDB
    .then((users) =>{ 
      res.json(users);                        // this return the users in json format from the db
      console.log(`this is inside /users.get : ${users}`);
    }) //// WHY IS THIS  CONSOLE.LOG NOTWORKING
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.usernamehahaa; //it looks if there is a property called usernamehaha in the body we send with the req from the create user.component ans asign the strintg to the username variable
  const newUser = new User({username});    //create a newUser and change the variable username="Andres" to and object username: 'Andres'
  console.log("This is insisde users/add and this is the req.body: ",req.body, 'And this is the username: ',username,  'And this is the newUser', newUser)
  newUser
    .save()                                 // finally save the newUser to the mongodb database
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
