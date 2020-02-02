import Pagination from './index';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../Utils/test'


const setUp = (props={}) => {
    const component = shallow(<Pagination {...props} />);
    return component;
};

describe('Pagination Component', ()=> {

    let component;
    beforeEach(() => {
        component = setUp(); 
    })

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'pagination');
        expect(wrapper.length).toBe(1);
    });

})