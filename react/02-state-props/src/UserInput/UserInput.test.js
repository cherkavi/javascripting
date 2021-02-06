import React from "react";
import { shallow } from "enzyme";
import UserInput from "./UserInput";

describe("UserInput", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UserInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
