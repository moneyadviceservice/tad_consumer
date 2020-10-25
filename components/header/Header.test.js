import { shallow } from "enzyme";

import Header from "./Index";
import Breadcrumb, { MobileBreadcrumb } from "../../Utils/layouts";


jest.mock("react-i18next", () => ({
  withTranslation: () => (Component) => {
    Component.defaultProps = { ...Component.defaultProps, t: () => [] };
    return Component;
  },
}));


describe("Header component", ()=>{
    const header = shallow(<Header/>)
   
    it("should render BreadCrumb component", ()=> {
        expect(header.containsMatchingElement(<Breadcrumb />)).toEqual(true);
        })
    it("should render MobileBreadcrumb component", ()=> {
        expect(header.containsMatchingElement(<MobileBreadcrumb />)).toEqual(true);
        })

 
})