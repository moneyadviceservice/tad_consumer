import { shallow } from "enzyme";

import Homepage from "../../pages/index";
import { Heading } from "@moneypensionservice/directories";
import { QuestionButton } from "./index";
import { findByTestAtrr, checkProps } from "../../Utils/test";

jest.mock("react-i18next", () => ({
  withTranslation: () => (Component) => {
    Component.defaultProps = { ...Component.defaultProps, t: () => [] };
    return Component;
  },
}));

describe("HomePage", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Homepage />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should have only one h1", () => {
    const pageHeading = wrapper.find(Heading);
    expect(
      pageHeading.findWhere((node) => node.props().level === 1)
    ).toHaveLength(1);
  });

  it("should contain 4 rows", () => {
    const component = findByTestAtrr(wrapper, "contentRow");
    expect(component.length).toBe(4);
  });

  it("should contain 8 columns", () => {
    const component = findByTestAtrr(wrapper, "contentCol");
    expect(component.length).toBe(8);
  });
  it("should have a button with href pointing to /listings ", () => {
    const linkButton = wrapper.find(QuestionButton);
    // console.log(linkButton.debug());
    expect(
      linkButton.findWhere((node) => node.props().href === "/listings")
    ).toHaveLength(2);
  });
});
