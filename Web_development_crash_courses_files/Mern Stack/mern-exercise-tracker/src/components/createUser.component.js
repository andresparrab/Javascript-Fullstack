import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [username, setUserName] = useState("");

  const onChangeUsername = (e) => setUserName(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      usernamehahaa: username, // This MSUT BE THE SAME vame as req.body.usernamehaha
    };
    console.log(username);

    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => {
        console.log("This is res.data from users/add: ......", res);
        // console.log(user);
        setUserName("");
      })
      .catch(function (error) {
        console.log('Already user ');
      });
  };

  // useEffect(() => {
  //   setUserName('Jong')

  // }, []);

  return (
    <div>
      <h3>Create new User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create Awomse exercise log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};
export default CreateUser;
