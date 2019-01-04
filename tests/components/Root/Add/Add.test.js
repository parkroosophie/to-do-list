// tests for the <Add /> component

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import moment from "moment";
import React from "react";

import Add from "@root/components/Root/Add";

Enzyme.configure({ adapter: new Adapter() });

const emptyFunc = () => {};

describe("Root -> Add enzyme tests", () => {
  it("should correctly submit", () => {
    const submissionAction = jest.fn(); //fake submission callback
    const addComponent = shallow(<Add onSubmit={submissionAction} />);

    const mockBody = "My test body";
    const mockDueDate = "2001-01-01";

    addComponent
      .find('input[name="body"]')
      .simulate("change", { target: { name: "body", value: mockBody } });
    addComponent
      .find('input[name="dueDate"]')
      .simulate("change", { target: { name: "dueDate", value: mockDueDate } });
    addComponent.simulate("submit", { preventDefault: emptyFunc });
    expect(submissionAction).toHaveBeenCalledWith({
      body: mockBody,
      dueDate: moment(mockDueDate)
    });
  });
});
