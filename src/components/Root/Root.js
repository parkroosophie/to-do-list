import React, { Component } from "react";

import Add from "./Add";
import List from "./List";
import s from "./Root.scss";

export default class Root extends Component {
  state = { todos: [] };

  handleAdd = todoObj => {
    // no mutation
    this.setState({
      todos: [todoObj, ...this.state.todos]
    });
  };

  removeTodo = todoIndex => {
    // no mutation
    this.setState({
      todos: this.state.todos
        .slice(0, todoIndex)
        .concat(this.state.todos.slice(todoIndex + 1))
    });
  };

  render() {
    return (
      <div className={s.wrapper}>
        <h1 className={s.title}>Todo List</h1>
        <List removeTodo={this.removeTodo} todos={this.state.todos} />
        <Add onSubmit={this.handleAdd} />
      </div>
    );
  }
}
