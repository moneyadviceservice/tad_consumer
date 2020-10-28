import { shallow } from "enzyme";
import Filters  from "../filters";
import { FormDiv, ToggleIcon } from "../utils";
import { findByTestAtrr } from "../../../Utils/test/";

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
    const ToggleMobile = jest.fn();
      
        beforeEach(() => {
            filters = shallow(<Filters onClick={ToggleMobile} t={key => []}/>);
        });
      
        afterEach(() => {
            filters.unmount();
        });

    
    it("should render the Form component", () => {
        const form = findByTestAtrr(filters, "filterForm");
        expect(form.length).toBe(1);
       
        // console.log(filters.debug())
    })

    it("should render 8 Formfields", () => {
        const formField = findByTestAtrr(filters, "filterFormField")
        expect(formField.length).toBe(8);
    
    })
    it("should render 1 Select", () => {
        const select = findByTestAtrr(filters, "filterSelect")
        expect(select.length).toBe(1);
    
    })
    it("should render 7 Tooltip", () => {
        const tooltip = findByTestAtrr(filters, "filterTooltip")
        expect(tooltip.length).toBe(7);
       
    
    })
    it("should toggle mobile on click", () => {
        // before click on the toggle icon
        expect(filters.find(FormDiv).props().isMobile).toBe(false)
        // simulated click
        filters.find(ToggleIcon).simulate("click")
        // after simulated click
        expect(filters.find(FormDiv).props().isMobile).toBe(true)    
    })

   
    
})