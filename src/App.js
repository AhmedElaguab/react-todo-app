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
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
