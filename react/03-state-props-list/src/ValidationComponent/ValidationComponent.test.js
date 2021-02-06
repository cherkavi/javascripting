import React from "react";
import { shallow } from "enzyme";
import ValidationComponent from "./ValidationComponent";

describe("ValidationComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ValidationComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
