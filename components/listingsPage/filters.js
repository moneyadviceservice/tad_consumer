import {
  Heading,
  Radio,
  Formfield,
  Button,
} from "@moneypensionservice/directories";
import styled from "styled-components";

const FilterFormFIeld = styled(Formfield)`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #edf0f0;
  padding-left: 0;
`;

const Filters = () => {
  return (
    <form>
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
        <span style={{ fontSize: "11px", color: "#003D8E" }}>Clear</span>
      </Heading>
      <div
        style={{
          border: "1px solid #edf0f0",
          padding: "0 18px 18px",
        }}
      >
        <FilterFormFIeld legend="Filter by insurance type">
          <Radio value="Single Trip" label="Single Trip" name="insuranceType" />
          <Radio value="Annual Trip" label="Annual Trip" name="insuranceType" />
        </FilterFormFIeld>
        <FilterFormFIeld legend="Filter by length of trip">
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
        <FilterFormFIeld legend="Destination">
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
        <FilterFormFIeld legend="Is your trip a cruise?">
          <Radio value="Yes" label="Yes" name="cruise" />
          <Radio value="No" label="No" name="cruise" />
        </FilterFormFIeld>
        <FilterFormFIeld legend="When are you travelling?">
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
        <FilterFormFIeld legend="I am going abroad for medical treatment">
          <Radio value="Yes" label="Yes" name="treatment" />
          <Radio value="No" label="No" name="treatment" />
        </FilterFormFIeld>
        <FilterFormFIeld legend="My doctor has given me a terminal prognosis">
          <Radio value="Yes" label="Yes" name="terminal" />
          <Radio value="No" label="No" name="terminal" />
        </FilterFormFIeld>
        <FilterFormFIeld legend="Do you require cover for medical equipment?">
          <Radio value="Yes" label="Yes" name="equipment" />
          <Radio value="No" label="No" name="equipment" />
        </FilterFormFIeld>
        <Button primary>Shortlist provider</Button>
      </div>
    </form>
  );
};

export default Filters;
