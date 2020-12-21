import { shallow } from "enzyme";
import * as nextRouter from 'next/router';
import Header from "./";
import Breadcrumb, { MobileBreadcrumb } from "../../Utils/layouts";


jest.mock("react-i18next", () => ({
  withTranslation: () => (Component) => {
    Component.defaultProps = { ...Component.defaultProps, t: () => [] };
    return Component;
  },
}));


describe("Header component", ()=>{

    nextRouter.useRouter = jest.fn();
    nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));
    const header = shallow(<Header/>)
   
    it("should render BreadCrumb component", ()=> {
        expect(header.containsMatchingElement(<Breadcrumb />)).toEqual(true);
        })
    it("should render MobileBreadcrumb component", ()=> {
        expect(header.containsMatchingElement(<MobileBreadcrumb />)).toEqual(true);
        })

 
})