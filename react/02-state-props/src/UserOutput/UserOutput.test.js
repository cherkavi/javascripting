import React from "react";
import { shallow } from "enzyme";
import UserOutput from "./UserOutput";

describe("UserOutput", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UserOutput />);
    expect(wrapper).toMatchSnapshot();
  });
});
