import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import Todos from "./components/Todos";
import AddItem from "./components/AddItem";

class App extends Component {
  state = {
    todos: [
      {
        userId: 1,
        id: 1,
        title: "\\delectus aut autem",
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

    this.setState({ todos });
  };

  hundleItemDeleted = todo => {
    let id = 1;
    let todos = this.state.todos
      .filter(todoItem => todoItem !== todo)
      .map(todoItem => {
        todoItem.id = id++;
        return todoItem;
      });

    this.setState({ todos });
  };

  hundleItemAdded = e => {
    e.preventDefault();
    const AddedItem = {};
    AddedItem.userId = 1;
    AddedItem.id = this.state.todos.length;
    AddedItem.id++;
    AddedItem.title = e.target.title.value;
    AddedItem.completed = false;

    const todos = this.state.todos;
    todos.push(AddedItem);

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
        <AddItem onItemAdded={this.hundleItemAdded} />
      </div>
    );
  }
}

export default App;
