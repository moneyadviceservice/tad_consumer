import { shallow } from 'enzyme'
import  {Results } from '../results'
import { Loading } from '../loading'


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
        expect(result.containsMatchingElement(<Loading />)).toEqual(true);
    })
})