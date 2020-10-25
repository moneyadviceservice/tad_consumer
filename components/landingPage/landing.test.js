import { shallow, render, mount } from "enzyme";

import Homepage from "../../pages/index";
import { QuestionButton } from "./Index";
import { findByTestAtrr, checkProps } from "../../Utils/test";
import { InternalLink } from "../../Utils/layouts";
import FAQ from "./FAQ"
import BrokerTable from "./BrokerTable"
import Title from "../title"

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

  

  it("should contain 4 rows", () => {
   
    const component = findByTestAtrr(wrapper, "contentRow");
    expect(component.length).toBe(4);
  });

  it("should contain 8 columns", () => {
    const component = findByTestAtrr(wrapper, "contentCol");
    expect(component.length).toBe(8);
  });
  it("should have a button with href pointing to /listings ", () => {
    const linkButton = wrapper.find(InternalLink);
    expect(
      linkButton.findWhere((node) => node.prop("href") === "/listings")
    ).toHaveLength(1);
  });

  it("should render FAQ component", ()=> {
    expect(wrapper.containsMatchingElement(<FAQ />)).toEqual(true);
  })
  it("should render BrokerTable component", ()=> {
    expect(wrapper.containsMatchingElement(<BrokerTable />)).toEqual(true);
  })
  it("should render Title component", ()=> {
    expect(wrapper.containsMatchingElement(<Title />)).toEqual(true);
  })

});
