import React, { Component } from "react";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";

class Todos extends Component {
  state = {
    query: ""
  };

  updateQuery = e => {
    this.setState({ query: e.target.value.trim() });
  };

  render() {
    const { todos } = this.props;
    let showingTodos;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query));
      showingTodos = todos
        .filter(todoItem => match.test(todoItem.title))
        .sort(sortBy("name"));
    } else {
      showingTodos = todos;
    }
    return (
      <React.Fragment>
        <div className="container">
          <input
            type="text"
            placeholder="Search todos"
            className="search-todos-input"
            onChange={e => this.updateQuery(e)}
            value={this.state.query}
          />
          <ul className="list-unstyled">
            {showingTodos.map(todo => (
              <li className={this.getItemClasses(todo.completed)} key={todo.id}>
                <input
                  className="mr-3"
                  type="checkbox"
                  onChange={() => this.props.onItemCompleted(todo)}
                  checked={todo.completed}
                />
                {todo.title}
                <button
                  className="btn btn-danger d-inline-block ml-4"
                  onClick={() => this.props.onItemDeleted(todo)}
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }

  // Return Class value to items based on its status
  getItemClasses = isCompleted => {
    const classes = isCompleted ? "todo-item completed" : "todo-item";
    return classes;
  };
}

export default Todos;
