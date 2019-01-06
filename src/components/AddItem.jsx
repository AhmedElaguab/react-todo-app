import React, { Component } from "react";

class AddItem extends Component {
  render() {
    return (
      <div className="container">
        <form
          name="addItemForm"
          onSubmit={e => this.props.onItemAdded(e)}
          className="add-item-form"
        >
          <input
            name="title"
            type="text"
            placeholder="Write an item"
            className="search-todos-input"
          />
          <input
            type="submit"
            className="btn btn-success btn-lg float-right"
            value="Add item"
          />
        </form>
      </div>
    );
  }
}

export default AddItem;
