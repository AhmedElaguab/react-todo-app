import React, { Component } from "react";

class Todos extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div className="container">
        <ul className="list-unstyled">
          {todos.map(todo => (
            <li className={this.getItemClasses(todo.completed)} key={todo.id}>
              <input
                id="todo-item-checkbox"
                className="mr-3"
                type="checkbox"
                onChange={() => this.props.onItemCompleted(todo)}
                checked={todo.completed}
              />
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Return Class value to items based on its status
  getItemClasses = isCompleted => {
    const classes = isCompleted ? "todo-item completed" : "todo-item";
    return classes;
  };
}

export default Todos;
