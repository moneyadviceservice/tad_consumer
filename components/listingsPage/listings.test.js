import Enzyme, { shallow } from "enzyme";

import Listings from "../../pages/listings";
import Filters from "./filters";
import Results from "./results"
import Listing from "./index";

import { findByTestAtrr} from "../../Utils/test";

 jest.mock("react-i18next", () => ({
        withTranslation: () => (Component) => {
          Component.defaultProps = { ...Component.defaultProps, t: () => [] };
          return Component;
        },
      }));
 
      describe("Listings Page", () => {
        let listings;
      
        beforeEach(() => {
          listings = shallow(<Listings />);
        });
      
        afterEach(() => {
          listings.unmount();
        });
      
        it("renders listing component", ()=> {
          expect(listings.containsMatchingElement(<Listing />)).toEqual(true);
        })
      
        it("should contain 2 rows", () => {
          const listingRows = findByTestAtrr(listings, "contentRow");
          expect(listingRows.length).toBe(2);
        });
      
      });
      
      describe("Listing Component", () => {
          let listing;
          
        
          beforeEach(() => {
            listing = shallow(<Listing />);
          });
        
          afterEach(() => {
            listing.unmount();
          });
        
          it("renders Filters component", ()=> {
            expect(listing.containsMatchingElement(<Filters />)).toEqual(true);
          })
          it("renders Results component", ()=> {
            expect(listing.containsMatchingElement(<Results />)).toEqual(true);
          })
      
        
        });





