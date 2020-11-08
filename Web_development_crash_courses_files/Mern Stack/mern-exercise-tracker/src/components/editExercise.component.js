import React, { useEffect, useState, useRef } from "react";
import  DatePicker from 'react-date-picker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'

 const EditExercise = (props) => {
  const [username, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  const onChangeUsername = (e) => setUserName(e.target.value);
  const onChangedescription = (e) => setDescription(e.target.value);
  const onChangeDuration = (e) => setDuration(e.target.value);
  const onchangeDate = () => setDate(date);

  useEffect(() => {
    getUsersFromDataDB2();
    // console.log("this is props match id", props.match.params.id);
  
  },[]);
  
  
  const onSubmit=(e) =>{
    e.preventDefault();
    const exercise = {
      username:username ,
      description: description,
      duration: duration,
      date: date,
    }
    console.log(exercise)

    axios.post('http://localhost:5000/exercises/update/'+props.match.params.id, exercise)
    .then(res => 
      {
        console.log(res.data);
        // window.location='/'
 
      })
    .catch(function () {
      console.log('Exercises NOT AAADED');
    });
   


   
  }

  const getUsersFromDataDB2 = () => {
    axios.get('http://localhost:5000/exercises/'+props.match.params.id)
    .then((res) => {
      setUserName(res.data.username);
      setDescription(res.data.description);
      setDuration(res.data.duration);
      setDate(new Date(res.data.date));
      console.log("this is the exerceise/+props.match.id",  res.data)
})
    .catch((error) => console.log(error))




    axios.get('http://localhost:5000/users/')
    .then((res) => {if(res.data.length >0)
    {
      setUsers(res.data.map(user => user.username))
      console.log("this is the Iteration from get userfrom DB", res.data)
      
}})
    .catch((error) => console.log(error))
  }








  const inputRef = useRef(null);

  return <div>
    <h3>Edit Exercise Log</h3>
    <form onSubmit={onSubmit}>
    <div className='form-group'>
      <label>Username: </label>
      <select ref={inputRef }
       required
       className="form-control"
       value={username}
       onChange={onChangeUsername}>
         {
         users.map(function(user) {
           return <option 
           key={user}
           value={user}>{user}</option>;
           })
       }
      </select>
    </div>
    <div className='form-group'>
      <label>Description: </label>
      <input type="text"
       required
       className="form-control"
       value={description}
       onChange={onChangedescription}>

      </input>
    </div>
    <div className='form-group'>
      <label>Duration (in minutes): </label>
      <input type="text"
       required
       className="form-control"
       value={duration}
       onChange={onChangeDuration}>
      </input>
    
    
    </div>
    <div className='form-group'>
      <label>Date: </label>
      <DatePicker
       selected={date}
       onChange={onchangeDate}
       showTimeSelect
  dateFormat="Pp">
         
      </DatePicker>
    </div>

    <div className='form-group'>
    <input type="submit" value="Edit exercise log" className="btn btn-primary"/>
    </div>
  </form>
</div>;
};

export default EditExercise;

