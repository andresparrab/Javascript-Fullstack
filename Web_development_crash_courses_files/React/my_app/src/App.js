import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/header";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";

class App extends Component {
  state = {
    // this is a java opject state = {}
    todos: [
      // is a array of objects [{object1},{object2}...{objectN}]
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },

      {
        id: 2,
        title: "Dinner with wife",
        completed: false,
      },

      {
        id: 3,
        title: "Meeting with Boss",
        completed: false,
      },
    ],
  };

  // Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // ADD todo
  AddTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo AddTodo={this.AddTodo} />
          <Todos
            todosAtribute={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
