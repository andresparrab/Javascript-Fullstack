import React from "react";
import "./MyFirstComponent.css";

export const MyFisrtComponent = (props) => {
  // this is a functional component

  return (
    <>
      <h1 className="title">
        {props.name}
        {props.age}
      </h1>
    </>
  );
};
