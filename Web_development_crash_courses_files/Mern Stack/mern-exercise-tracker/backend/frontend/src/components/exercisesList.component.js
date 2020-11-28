import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = (props) => {
  console.log("This are PProps.exersuse. username ", props.exercice._id);
  // console.log(
  //   "This are props.deleteExercise(props.exercise._id) userID ",
  //   props.deleteExercise()
  // );
  return (
    <tr>
      <td>{props.exercice.username}</td>
      <td>{props.exercice.description}</td>
      <td>{props.exercice.duration}</td>
      <td>{props.exercice.date.substring(0, 16)}</td>
      <td>
        <Link to={"/edit/" + props.exercice._id}>edit</Link> |{" "}
        <a
          href="#"
          onClick={() => {
            props.deleteExercise(props.exercice._id);
          }}
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export const ExercisesList = () => {
  const [exercices, setExercises] = useState([]);

  const GetExercisesListFromDB = () => {
    axios
      .get("/exercises")
      .then((res) => {
        setExercises(res.data);
        // console.log(
        //   "This is from the getExercisesLsitfromDB RESDATA",
        //   res.data
        // );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    GetExercisesListFromDB();
    console.log(
      "This is inside getExercisesLsitfromDB Inside exercisesList:",
      exercices
    );
  }, []);

  const deleteExercise = (id) => {
    axios
      .delete("/exercises/" + id)
      .then((res) => {
        console.log(
          "This is Before Deleteexersice Inside exercisesList:",
          exercices
        );
        setExercises(exercices.filter((el) => el._id !== id));
        console.log(
          "This is After Deleteexersice Inside exercisesList:",
          exercices
        );
      })
      .catch(function (error) {
        console.log("Already user ");
      });
  };

  const exercicesList = () => {
    return exercices.map((currentExercise) => {
      return (
        <Exercise
          exercice={currentExercise}
          deleteExercise={deleteExercise}
          key={currentExercise._id}
        />
      );
    });
  };

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{exercicesList()}</tbody>
      </table>
    </div>
  );
};
export default ExercisesList;
