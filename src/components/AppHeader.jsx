import React, { Component } from "react";

class AppHeader extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <h1 className="py-3">
            Todo App |{" "}
            <small>
              Built with{" "}
              <a href="https://reactjs.org/" target="_blank">
                React
              </a>{" "}
              and{" "}
              <a href="https://getbootstrap.com/" target="_blank">
                Bootstrap.
              </a>
            </small>
          </h1>
          <hr />
        </div>
      </header>
    );
  }
}

export default AppHeader;
