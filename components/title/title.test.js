import { shallow } from "enzyme";

import Title from "./index";
import { Heading } from "@moneypensionservice/directories";

jest.mock("react-i18next", () => ({
  withTranslation: () => (Component) => {
    Component.defaultProps = { ...Component.defaultProps, t: () => [] };
    return Component;
  },
}));

describe("Title", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Title />);
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
});
