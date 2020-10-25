import { shallow } from "enzyme";
import   {MyApp } from "../pages/_app"
import AppHead from "../Utils/layouts/head";
import { PageFooter} from "../components/footer/index"


describe("AppJs", () => {
    it("renders footer component", () =>{
        const app = shallow(<MyApp />).childAt(0).dive();
        expect(app.contains(
                <PageFooter/>
        )).toBe(true);    
    })
    it("renders header component", () =>{
        const app = shallow(<MyApp />).childAt(0).dive();
        expect(app.contains(
                <AppHead/>
        )).toBe(true);    
    })


})
