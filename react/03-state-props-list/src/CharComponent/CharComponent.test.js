import React from "react";
import { shallow } from "enzyme";
import CharComponent from "./CharComponent";

describe("CharComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CharComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
