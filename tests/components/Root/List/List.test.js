// tests for the <List /> component

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import moment from "moment";
import React from "react";

import List from "@root/components/Root/List";

Enzyme.configure({ adapter: new Adapter() });

const emptyFunc = () => {};
const generateOutputText = ({ body, dueDate }) =>
  `${body} - ${dueDate.format("DD MMM YYYY")}`;

const mockedTodos = [
  {
    body: "My test body",
    dueDate: moment()
  },
  {
    body: "My test body 2",
    dueDate: moment()
  }
];

describe("Root -> List enzyme tests", () => {
  it("should correctly display todos", () => {
    const listComponent = shallow(
      <List removeTodo={emptyFunc} todos={mockedTodos} />
    );

    expect(
      listComponent
        .find("li")
        .at(0)
        .find("span")
        .text()
    ).toBe(generateOutputText(mockedTodos[0]));
    expect(
      listComponent
        .find("li")
        .at(1)
        .find("span")
        .text()
    ).toBe(generateOutputText(mockedTodos[1]));
  });

  it("should correctly display if there are no todos", () => {
    const listComponent = shallow(<List removeTodo={emptyFunc} todos={[]} />);

    expect(listComponent.name()).toBe("p");
    expect(listComponent.text()).toBe("No todos yet.");
  });

  it("should correctly remove todos", () => {
    const removalAction = jest.fn();
    const listComponent = shallow(
      <List removeTodo={removalAction} todos={mockedTodos} />
    );

    listComponent
      .find("button")
      .at(0)
      .simulate("click");

    expect(removalAction).toHaveBeenCalledWith(0);
  });
});
