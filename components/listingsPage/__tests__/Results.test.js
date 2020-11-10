import { shallow } from 'enzyme'
import  {Results } from '../results'
import { Loading } from '../loading'
import { findByTestAtrr } from "../../../Utils/test"

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


describe("Results Component Tests", () => {

    const result = shallow(<Results />)
    it("should render loading on initial load",  () => {
      const component = findByTestAtrr(result, "loadingDummy");
      expect(component.length).toBe(1);
        
    })
})