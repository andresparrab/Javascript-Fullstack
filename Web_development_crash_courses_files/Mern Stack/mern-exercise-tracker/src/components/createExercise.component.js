import React, { useEffect, useState, useRef } from "react";
import DatePicker from "react-date-picker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const CreateExercise = (props) => {
  const [username, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  const onChangeUsername = (e) => setUserName(e.target.value);
  const onChangedescription = (e) => setDescription(e.target.value);
  const onChangeDuration = (e) => setDuration(e.target.value);
  const onchangeDate = () => setDate(date);

  console.log("This is the current date: ", date);
  const onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date,
    };
    console.log(exercise);

    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => {
        console.log(res.data);
        //console.log({exercise});
        setUserName("");
        // window.location='/'
      })
      .catch(function () {
        console.log("Exercises NOT AAADED");
      });

    // window.location='/'
  };

  const getUsersFromDataDB2 = () => {
    axios
      .get("http://localhost:5000/users/")
      .then((res) => {
        if (res.data.length > 0) {
          setUsers(res.data.map((user) => user.username));
          console.log(`this is the Iteration from get userfrom db ${res.data}`);
          setUserName(res.data[1].username); // This set the user index to show in the drop down username :
        }
      })
      .catch((error) => console.log(error));
  };

  //   const getUsersFromDataDB = () => {
  //     return(
  //     axios.get('http://localhost:5000/users/')
  //   .then(res =>
  //     {
  //       if(res.data.length >0)
  //       {
  //         setUsers(res.data.map(user => user.username))
  //         console.log(`this is the Iteration from get userfrom db ${res.data}`)
  //         setUserName(res.data[3].username) // This set the user index to show in the drop down username :
  // }
  // console.log(`this is the rest data from get userfrom db ${res.data}`) /// why when i get res.data not see the object inside the array?
  //     })
  //   .catch( function () {console.log('ERROr : Already user')}))}

  useEffect(() => {
    getUsersFromDataDB2();
    setDate(date);
  }, []);

  const inputRef = useRef(null);

  return (
    <div>
      <h3>Create new Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            ref={inputRef}
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          >
            {users.map(function (user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={onChangedescription}
          ></input>
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            required
            className="form-control"
            value={duration}
            onChange={onChangeDuration}
          ></input>
        </div>
        <div className="form-group">
          <label>Date: </label>
          <DatePicker
            selected={date}
            onChange={onchangeDate}
            showTimeSelect
            dateFormat="Pp"
          ></DatePicker>
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
export default CreateExercise;
