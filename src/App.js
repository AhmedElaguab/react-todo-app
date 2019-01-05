import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
      },
      {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true
      },
      {
        userId: 1,
        id: 5,
        title:
          "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
      }
    ]
  };

  hundleItemCompleted = todo => {
    const todos = this.state.todos;
    const todoItemIndex = todos.indexOf(todo);
    const completedItem = todos[todoItemIndex];
    completedItem.completed = completedItem.completed ? false : true;

    this.setState({
      todos
    });
  };

  hundleItemDeleted = todo => {
    const todos = this.state.todos.filter(todoItem => todoItem !== todo);

    this.setState({ todos });
  };

  render() {
    return (
      <div className="App">
        <AppHeader />
        <Todos
          todos={this.state.todos}
          onItemCompleted={this.hundleItemCompleted}
          onItemDeleted={this.hundleItemDeleted}
        />
      </div>
    );
  }
}

export default App;
