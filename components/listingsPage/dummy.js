import styled from "styled-components";
import {
  Heading,
  Formfield,
  resolveMedia,
  Tooltip,
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
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 12px 18px;
  display: flex;
  flex-direction: row;
  flexwrap: wrap;
  justify-content: space-between;
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
`;

// Tooltips value
export const insuranceTypeTip =
  "Single Trip:  Depending on what medical condition(s) you have, where you are going and for how long – sometimes a Single Trip policy might be cheaper than an Annual Multi-trip.  Also if you have been declined for an Annual Multi-trip policy, you might still get offered insurance if you choose a Single Trip policy.  But if you are planning to travel several times during a 12 month period, try for an Annual Multi-trip policy first. Annual Multi-trip: If you are planning to travel several times during a 12 month period, an Annual Multi-trip policy can save you money.  You can usually only buy an Annual Multi-trip policy up to 31 days in advance of when you want the policy to start.  If you get turned down for an Annual Multi-trip – or you think the cost is too much – its worth seeing if you can get a Single Trip policy instead.";

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
