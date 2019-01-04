import moment from "moment";
import React, { Component } from "react";

import s from "./Add.scss";

export default class Add extends Component {
  // NOTE - the state properties have to correspond to the inputs shown below in the render method
  state = { body: "", dueDate: "" };
  defaultState = this.state;

  handleChange = evt => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const formObj = {
      body: this.state.body,
      dueDate: moment(this.state.dueDate)
    };

    this.props.onSubmit(formObj);
    this.setState(this.defaultState);
  };

  render() {
    return (
      <form className={s.form} method="post" onSubmit={this.handleSubmit}>
        <h2>Add</h2>
        <strong>What to do</strong>
        <input
          name="body"
          type="text"
          onChange={this.handleChange}
          required
          value={this.state.body}
        />
        <strong>Due date</strong>
        <input
          name="dueDate"
          type="date"
          onChange={this.handleChange}
          required
          value={this.state.dueDate}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
