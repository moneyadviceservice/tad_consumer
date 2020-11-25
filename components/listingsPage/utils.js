import styled from "styled-components";
import {
  Heading,
  Formfield,
  resolveMedia,
  Tooltip,
  Paragraph,
} from "@moneypensionservice/directories";

export const DummyCard = styled.div`
  border: 1px solid #edf0f0;
  min-height: 100px;
  border-radius: 5px;
  margin-top: 20px;
  margin-bottom: 30px;
  padding-top: 20px;
  font-size: 16px;
  box-shadow: 0 1px #a8b2ba;
`;

export const CompanyName = styled.h2`
  color: #003d8e;
  border-bottom: 1px solid #edf0f0;
`;

export const SubHead = styled.h5`
  margin-top: 20px;
`;

export const CommsInfo = styled.div`
  border: 1px solid #edf0f0;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
  width: 90%;
`;

export const Comms = styled.span`
  vertical-align: super;
  display: inline-block;
`;

export const FilterFormFIeld = styled(Formfield)`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #edf0f0;
  padding-left: 0;
`;
export const ExtHeading = styled(Heading)`
  margin-top: 0;
  margin-bottom: 0;
  background: #003d8e;
  color: #fff;
  display: flex;
  flex-direction: row;
  flexwrap: wrap;
  justify-content: space-between;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 19px 18px;
  ${resolveMedia.md`
   background: #edf0f0;
    color: #515151
`};
`;

export const ToggleIcon = styled.span`
  cursor: pointer;
  ${resolveMedia.md`
   display: none
`};
`;

export const ClearButton = styled.span`
  font-size: 11px;
  color: #fff
  cursor: pointer;
  text-decoration: none;
  
  ${resolveMedia.md`
   
   color: #003d8e;
`};
`;

export const FormDiv = styled.div`
  border: 1px solid #edf0f0;
  padding: 0 18px 18px;
  display: ${(props) => (props.isMobile === true ? "none" : "block")};
  ${resolveMedia.md`
    display: block
 `};
`;

export const Legend = styled.legend`
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 700;
  width: 100%;
  margin-bottom: 0.75rem;
  color: #217d21;
`;

export const Select = styled.select`
  font-size: 16px;
  width: 70%;
  padding: 10px;
`;
export const TooltipText = styled(Tooltip)`
  color: #000;
  font-weight: 200;
  display: inline-block;
  margin-left: 20px;
`;
export const TooltipParagraph = styled(Paragraph)`
  color: #515151;
  font-size: 14px;
  margin: 0;
`;
// Select age range
export const ageRange = () => {
  var arr = [];

  for (let i = 1; i <= 100; i++) {
    arr.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return arr;
};

export const randomizeResult = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};


export const listingsPDF = (selectedFirms) => {
  return(
    <div>
        <h1 style={{ color: '#006a00'}}>List of Travel Insurance Firms</h1>
        { selectedFirms.map((firm, i)=>{
        return (
          <div key={i}
              style={{
                padding: '15px',
                fontSize: '16px',
                width: '70%',
                fontSize: '.75rem',
                lineHeight: '1rem',
              }}
          >
            <div style={{
              color: '#003d8e',
              fontSize: '1rem',
              lineHeight: '1.5rem',
              fontWeight: '900',
              }}>{firm.company}</div>
             <div style={{wordWrap: 'break-word'}}>{firm.online.website}</div>
             <div>{firm.online.phone}</div>
             <div style={{
              fontSize: '.75rem',
              lineHeight: '1rem',
              }}>{firm.online.email}</div>
          </div>
          )
      })}
      </div>
  )
 
};

export const displayFirms = (query, offerings, shuffledfirm) => {

  let filteredPool = Object.entries(query).map((e) => ( { [e[0]]: e[1] } ));

  let age = 0;
  let insuranceOption;

  filteredPool.map((fill) => {
    if (fill.cruise_30_days_max_age) {
      age = fill.cruise_30_days_max_age;
    }
    if (fill.singleOption || fill.annualOption) {
      insuranceOption = fill.singleOption || fill.annualOption;
    }
  });

  // FILTERING OFFERINGS 
    //start
    const selectedOfferings = filteredPool.reduce((acc, value) => {
      return acc.filter((offering) => {
        for (var key in value) {
          // filter age
          if (
            key == "cruise_30_days_max_age" ||
            key == "cruise_45_days_max_age" ||
            key == "cruise_55_days_max_age" ||
            key == "land_30_days_max_age" ||
            key == "land_45_days_max_age" ||
            key == "land_55_days_max_age"
            ) {
            let subtitle = parseInt(offering[Object.keys(value)]);
            let intAge  = parseInt(value[key])
            
            return (
              subtitle === 1000 ||
              intAge <= offering.cruise_30_days_max_age ||
              intAge <= offering.cruise_45_days_max_age ||
              intAge <= offering.cruise_55_days_max_age ||
              intAge <= offering.land_30_days_max_age ||
              intAge <= offering.land_45_days_max_age ||
              intAge <= offering.land_55_days_max_age
            );
          }

          //  filter when travelling
          if (key === "how_far_in_advance_trip_cover_weeks") {
            return parseInt(Object.values(value)[0]) <= parseInt(offering[key])
            
          }
          // filter length of trip
          if (key === "singleOption" || key === "annualOption") {
            let land = "land_" + Object.values(value)[0] + "_days_max_age";
            let cruise =
              "cruise_" + Object.values(value)[0] + "_days_max_age";
        
            return (
              (parseInt(`${offering[land]}`) != -1 ||
                parseInt(`${offering[cruise]}`) != -1) &&
              (age <= parseInt(`${offering[land]}`) ||
                age <= parseFloat(`${offering[cruise]}`) ||
                parseInt(`${offering[land]}`) === 1000 ||
                parseFloat(`${offering[cruise]}`) === 1000)
            );
          }
          // // filter cruise without insurance option
          if (
            key === "cruise" &&
            Object.values(value)[0] === "Yes" &&
            typeof insuranceOption === "undefined"
          ) {
            return (
              offering.cruise_30_days_max_age >= 0 ||
              offering.cruise_45_days_max_age >= 0 ||
              offering.cruise_55_days_max_age >= 0
            );
          }
          // filter non cruise without insurance option
          if (
            key === "cruise" &&
            Object.values(value)[0] === "No" &&
            typeof insuranceOption === "undefined"
          ) {
            return (
              offering.land_30_days_max_age >= 0 ||
              offering.land_45_days_max_age >= 0 ||
              offering.land_55_days_max_age >= 0
            );
          }
          // filter cruise
          if (
            key === "cruise" &&
            Object.values(value)[0] === "Yes" &&
            typeof insuranceOption !== "undefined"
          ) {
            let cruise = "cruise_" + insuranceOption + "_days_max_age";
            return (
              (age <= offering[cruise] && offering[cruise] != -1) ||
              (offering[cruise] === 1000 && offering[cruise] > -1)
            );
          }
          // filter non cruise
          if (
            key === "cruise" &&
            Object.values(value)[0] === "No" &&
            typeof insuranceOption !== "undefined"
          ) {
            let land = "land_" + insuranceOption + "_days_max_age";
            return (
              (age <= offering[land] && offering[land] != -1) ||
              (offering[land] === 1000 && offering[land] > -1)
            );
          }

          // filter terminal prognosis not covered
          if (
            key === "will_cover_terminal_prognosis" &&
            Object.values(value)[0] === "No"
          ) {
            return (
              offering[Object.keys(value)].includes("Yes") ||
              offering[Object.keys(value)].includes("No") ||
              offering[Object.keys(value)].includes(null)
            );
          }
          // filter specialist equipment not covered
          if (
            key === "will_cover_specialist_equipment" &&
            Object.values(value)[0] === "No"
          ) {
            return (
              offering[Object.keys(value)].includes("Yes") ||
              offering[Object.keys(value)].includes("No") ||
              offering[Object.keys(value)].includes(null)
            );
          }
          
          return (offering[Object.keys(value)].includes(Object.values(value)[0]) )
        }
      });
    }, offerings);

    //end of offerings filters
        // collected the ids of the selected offering into an array of array
        const offered = selectedOfferings.map((offering) => {
          let id = parseInt(offering.objectID);
          let arr = [];
          arr.push(id);
          return arr;
        });

        // flaten the collected offering into a single array
        const flatOffered = offered.flat();

        // use the selected ids for filter firms

        const selectedFirm = shuffledfirm.map((firm) => {
          if (firm.offering_ids.some((ele) => flatOffered.includes(ele))) {
            return firm;
          }
        });


        // filtered empty object out of the selectedFirm
        const filteredFirm = selectedFirm.filter((selected) => {
          return selected != null;
        });

        return filteredFirm
}
