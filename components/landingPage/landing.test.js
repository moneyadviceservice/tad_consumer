import { shallow, render, mount } from "enzyme";

import Homepage from "../../pages";

import { findByTestAtrr} from "../../Utils/test";
import { InternalLink } from "../../Utils/layouts";
import FAQ from "./FAQ"
import {BrokerTable} from "./BrokerTable"
import Title from "../title"
import { Anchor } from "@moneypensionservice/directories"

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
  it("should render Firms Login/Logout Anchor", () => {
    expect(wrapper.find(Anchor)).toHaveLength(2);
  })

  it("firms' register anchor should contain correct href", () => {
    expect(
      wrapper.findWhere((node) => node.prop("href") === "https://radsignup.moneyadviceservice.org.uk/travel_insurance_registrations/new")
    ).toHaveLength(1);
  })
  it("firms' login anchor should contain correct href", () => {
    expect(
      wrapper.findWhere((node) => node.prop("href") === "https://radsignup.moneyadviceservice.org.uk/users/sign_in")
    ).toHaveLength(1);
  })
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
