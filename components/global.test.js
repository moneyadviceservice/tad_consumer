import { shallow } from "enzyme";
import   {MyApp } from "../pages/_app"
import AppHead from "../Utils/layouts/head";
import { PageFooter} from "../components/footer"
import BreadCrumb, {BreadAnchor, BreadLink} from "../Utils/layouts"
import * as nextRouter from 'next/router';
import { findByTestAtrr} from "../Utils/test";



describe("AppJs", () => {
 

  let app;
    
      
  beforeAll(() => {
    app = shallow(<MyApp />);
  });

  afterAll(() => {
    app.unmount();
  });

    it("renders head component", () => {
        
        const component = findByTestAtrr(app, "contentHead");
        expect(component.length).toBe(1);
          
    })
    it("renders footer component", () => {
        
        const component = findByTestAtrr(app, "contentFooter");
        expect(component.length).toBe(1);
         
    })


})





describe("Breadcrumb", () => {

    jest.mock("react-i18next", () => ({
        withTranslation: () => (Component) => {
          Component.defaultProps = { ...Component.defaultProps, t: () => [] };
          return Component;
        },
      }));

      beforeEach(() => {
       
        nextRouter.useRouter = jest.fn();
        nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));
        
      })

    it("contains BreadAnchor", () => {
        let props
        props = {
            path: "/"
          };
        
        const bread = shallow(<BreadCrumb {...props}/>).dive()
        const breadAnchor = findByTestAtrr(bread, "breadAnchor");
        expect(breadAnchor.length).toBe(1);
        
        
    })

    it("contains MAS hompage link", () => {
        let props
        props = {
            path: "/"
          };
        
        const bread = shallow(<BreadCrumb {...props}/>).dive()
        const MAS = bread.find(BreadAnchor)
        expect(
            MAS.findWhere((node) => node.prop("href") === "https://www.moneyadviceservice.org.uk/en")
          ).toHaveLength(1);
        
    })

    it("contains BreadLink", () => {
        let props
        props = {
            path: "/"
          };
        
        const bread = shallow(<BreadCrumb {...props}/>).dive()
        expect(bread.containsMatchingElement(<BreadLink/>)).toBe(true)
   
        
    })
    it("contain 2 BreadLinks if path is not '/' ", () => {
        let props
        props = {
            path: "/listings"
          };
        
        const bread = shallow(<BreadCrumb {...props}/>).dive()
        const breadlink = bread.find(BreadLink)
        expect(breadlink.length).toBe(2)
        expect(breadlink.at(0).findWhere((node) => node.prop("href") === "/")).toHaveLength(1);
        expect(breadlink.at(1).findWhere((node) => node.prop("href") === "/listings")).toHaveLength(1);
      

        
    })

})
