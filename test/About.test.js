import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import About from "../pages/about.js";

describe("With Enzyme", () => {
  it('About shows "Hello, Sunshine!"', () => {
    const app = shallow(<About />);

    expect(app.find("div").text()).toEqual("Hello, Sunshine!");
  });
});

describe("With Snapshot Testing", () => {
  it('About shows "Hello, Sunshine!"', () => {
    const component = renderer.create(<About/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});