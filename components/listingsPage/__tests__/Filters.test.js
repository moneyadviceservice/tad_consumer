import { shallow } from "enzyme";
import Filters  from "../filters";
import { FormDiv, ToggleIcon } from "../utils";
import { findByTestAtrr } from "../../../Utils/test";

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

jest.mock("react-i18next", () => ({
    withTranslation: () => (Component) => {
      Component.defaultProps = { ...Component.defaultProps, t: () => [] };
      return Component;
    },
  }));



describe("Filters Component Tests", () => {

    let filters;
   
      
        beforeAll(() => {
            filters = shallow(<Filters />);
        });
      
        afterAll(() => {
            filters.unmount();
        });

    
    it("should render the Form component", () => {
        const form = findByTestAtrr(filters, "filterForm");
        expect(form.length).toBe(1);
       
        // console.log(filters.debug())
    })

    it("should render 9 Formfields", () => {
        const formField = findByTestAtrr(filters, "filterFormField")
        expect(formField.length).toBe(9);
    
    })
    it("should render 1 Select", () => {
        const select = findByTestAtrr(filters, "filterSelect")
        expect(select.length).toBe(1);
    
    })
    it("should render 10 Tooltips", () => {
        const tooltip = findByTestAtrr(filters, "filterTooltip")
        expect(tooltip.length).toBe(10);
       
    
    })
    

   
    
})

describe("Toggle Click", ()=> {
    let filters;
    
      
        beforeAll(() => {
            filters = shallow(<Filters />);
        });
      
        afterAll(() => {
            filters.unmount();
        });

    it("should toggle mobile on click", () => {
        // before click on the toggle icon
        expect(filters.find(FormDiv).props().isMobile).toBe(false)
        // simulated click
        filters.find(ToggleIcon).simulate("click")
        // after simulated click
        expect(filters.find(FormDiv).props().isMobile).toBe(true)    
    })
    
})
