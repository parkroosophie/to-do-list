// tests for the <Root /> component

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import moment from "moment";
import React from "react";

import Root from "@root/components/Root";
import Add from "@root/components/Root/Add";
import List from "@root/components/Root/List";

Enzyme.configure({ adapter: new Adapter() });

const getTodoDataWithTodo = () => {
  const mountedRoot = shallow(<Root />);
  const todoObj = {
    body: "Test body",
    dueDate: moment()
  };
  mountedRoot.find(Add).prop("onSubmit")(todoObj); //basically triggers the adding of an item

  return [mountedRoot, todoObj];
};

describe("Root enzyme tests", () => {
  it("should correctly generate initial state", () => {
    const initialState = { todos: [] };
    expect(shallow(<Root />).state()).toEqual(initialState);
  });

  it("should correctly add todos to state", () => {
    const [mountedRoot, todoObj] = getTodoDataWithTodo();

    expect(mountedRoot.state()).toEqual({ todos: [todoObj] });
  });

  it("should correctly remove todos from state", () => {
    const [mountedRoot] = getTodoDataWithTodo();

    mountedRoot.find(List).prop("removeTodo")(0); //remove item index 0

    expect(mountedRoot.state()).toEqual({ todos: [] });
  });
});
