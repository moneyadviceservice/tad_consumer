import { shallow } from "enzyme";

import Listings from "../../../pages/listings";
import Filters from "../filters";
import Results from "../results"
import Listing from "..";
import Title from "../../title"


import { findByTestAtrr} from "../../../Utils/test";

 jest.mock("react-i18next", () => ({
        withTranslation: () => (Component) => {
          Component.defaultProps = { ...Component.defaultProps, t: () => [] };
          return Component;
        },
      }));

 
      describe("Listings Page", () => {
        let listings;
      
        beforeAll(() => {
          listings = shallow(<Listings />);
        });
      
        afterAll(() => {
          listings.unmount();
        });
      
        it("renders listing component", ()=> {
          expect(listings.containsMatchingElement(<Listing />)).toEqual(true);
        })
      
        it("should contain 2 rows", () => {
          const listingRows = findByTestAtrr(listings, "contentRow");
          expect(listingRows.length).toBe(2);
        });
        it("should render Title component", ()=> {
            expect(listings.containsMatchingElement(<Title />)).toEqual(true);
          })
      
      });
      
      describe("Listing Component", () => {
          let listing;
          
        
          beforeAll(() => {
            listing = shallow(<Listing />);
          });
        
          afterAll(() => {
            listing.unmount();
          });
        
          it("renders Filters component", ()=> {
            expect(listing.containsMatchingElement(<Filters />)).toEqual(true);
          })
          it("renders Results component", ()=> {
            expect(listing.containsMatchingElement(<Results />)).toEqual(true);
          })
          
      
        
        });

      





