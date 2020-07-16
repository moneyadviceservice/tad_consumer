import {
  Heading,
  Radio,
  Formfield,
  Button,
  resolveMedia,
  Form,
  Tooltip,
} from "@moneypensionservice/directories";
import styled from "styled-components";

const FilterFormFIeld = styled(Formfield)`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #edf0f0;
  padding-left: 0;
`;

const FormDiv = styled.div`
  border: 1px solid #edf0f0;
  padding: 0 18px 18px;
  display: none;
  ${resolveMedia.md`
      display: block;
  `};
`;

const Legend = styled.legend`
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 700;
  width: 100%;
  margin-bottom: 0.75rem;
`;

const Select = styled.select`
  font-size: 16px;
  width: 70%;
  padding: 10px;
`;

const insuranceTypeTip =
  "Single Trip:  Depending on what medical condition(s) you have, where you are going and for how long – sometimes a Single Trip policy might be cheaper than an Annual Multi-trip.  Also if you have been declined for an Annual Multi-trip policy, you might still get offered insurance if you choose a Single Trip policy.  But if you are planning to travel several times during a 12 month period, try for an Annual Multi-trip policy first. Annual Multi-trip: If you are planning to travel several times during a 12 month period, an Annual Multi-trip policy can save you money.  You can usually only buy an Annual Multi-trip policy up to 31 days in advance of when you want the policy to start.  If you get turned down for an Annual Multi-trip – or you think the cost is too much – its worth seeing if you can get a Single Trip policy instead.";

const ageRange = () => {
  var arr = [];

  for (let i = 1; i <= 100; i++) {
    arr.push(
      <option key={i} value="{i}">
        {i}
      </option>
    );
  }

  return arr;
};

const Filters = () => {
  return (
    <Form style={{ marginBottom: "40px" }}>
      <Heading
        level={3}
        style={{
          marginTop: 0,
          marginBottom: 0,
          background: "#edf0f0",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          padding: "12px 18px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <span>Refine your search</span>
        <span style={{ fontSize: "11px", color: "#003D8E", cursor: "pointer" }}>
          Clear
        </span>
      </Heading>
      <FormDiv>
        <FilterFormFIeld>
          <Legend>
            Age at time of travel
            <Tooltip hover text="To be supplied" />
          </Legend>
          <Select>
            <option value="">Age at time of travel</option>
            {ageRange()}
          </Select>
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            Filter by insurance type
            <Tooltip minWidth="300px" hover text={insuranceTypeTip} />
          </Legend>
          <Radio value="Single Trip" label="Single Trip" name="insuranceType" />
          <Radio value="Annual Trip" label="Annual Trip" name="insuranceType" />
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            Filter by length of trip <Tooltip hover text="To be supplied" />
          </Legend>
          <Radio
            value="Under 35 Days"
            label="Under 45 Days"
            name="tripLength"
          />
          <Radio
            value="Under 45 Days"
            label="Under 45 Days"
            name="tripLength"
          />
          <Radio
            value="Under 55 Days"
            label="Under 55 Days"
            name="tripLength"
          />
          <Radio
            value="Over 6 Months"
            label="Over 6 Months"
            name="tripLength"
          />
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            Destination <Tooltip hover text="To be supplied" />
          </Legend>
          <Radio
            value="UK &amp; Europe"
            label="UK &amp; Europe"
            name="destination"
          />
          <Radio
            value="Worldwide exc USA, Canada, Carribeean"
            label="Worldwide exc USA, Canada, Carribeean"
            name="destination"
          />
          <Radio
            value="Worldwide inc USA, Canada, Carribeean"
            label="Worldwide inc USA, Canada, Carribeean"
            name="destination"
          />
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            Is your trip a cruise? <Tooltip hover text="To be supplied" />
          </Legend>
          <Radio value="Yes" label="Yes" name="cruise" />
          <Radio value="No" label="No" name="cruise" />
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            When are you travelling? <Tooltip hover text="To be supplied" />
          </Legend>
          <Radio value="Within 1 month" label="Within 1 month" name="when" />
          <Radio
            value="Between 1 - 6 months"
            label="Between 1 - 6 months"
            name="when"
          />
          <Radio
            value="Between 6 - 12 months"
            label="Between 6 - 12 months"
            name="when"
          />
          <Radio
            value="Between 12 - 18 months"
            label="Between 12 - 18 months"
            name="when"
          />
          <Radio
            value="Between 18 - 24 months"
            label="Between 18 - 24 months"
            name="when"
          />
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            I am going abroad for medical treatment
            <Tooltip hover text="To be supplied" />
          </Legend>
          <Radio value="Yes" label="Yes" name="treatment" />
          <Radio value="No" label="No" name="treatment" />
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            My doctor has given me a terminal prognosis
            <Tooltip hover text="To be supplied" />
          </Legend>
          <Radio value="Yes" label="Yes" name="terminal" />
          <Radio value="No" label="No" name="terminal" />
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            Do you require cover for medical equipment?
            <Tooltip hover text="To be supplied" />
          </Legend>
          <Radio value="Yes" label="Yes" name="equipment" />
          <Radio value="No" label="No" name="equipment" />
        </FilterFormFIeld>
        <Button primary>Shortlist provider</Button>
      </FormDiv>
    </Form>
  );
};

export default Filters;
