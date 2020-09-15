import { shallow } from "enzyme";

import Title from "./index";
import { ExtHeading } from "./index";

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
    const pageHeading = wrapper.find(ExtHeading);
    expect(
      pageHeading.findWhere((node) => node.props().level === 1)
    ).toHaveLength(1);
  });
});
