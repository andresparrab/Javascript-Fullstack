import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  // ----------------------- THis is the long way to do ------------------------------
  // getStyle = () => {
  //   if (this.props.todo.completed) {
  //     return {
  //       textDecoration: "line-through",
  //     };
  //   } else {
  //     return {
  //       textDecoration: "none",
  //     };
  //   }
  // };

  // ----------------------------- -this is more compact code...PREFERED-------------------------------//
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };
  // -------------------------------------------------------------------------------------------------------//

  render() {
    const { id, title } = this.props.todo; // pulling out the id and title variables from this.props.tod
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}

// Defining Proptypes for Todos
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const btnStyle = {
  background: "red",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
