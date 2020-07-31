import { useState } from "react";
import {
  Heading,
  Radio,
  Formfield,
  Button,
  resolveMedia,
  Form,
  Tooltip,
  Anchor,
} from "@moneypensionservice/directories";
import { InternalLink } from "../../Utils/layouts";
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

const FormWrapper = ({ isBrowser }) => <FormDiv></FormDiv>;

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

// Tooltips value
const insuranceTypeTip =
  "Single Trip:  Depending on what medical condition(s) you have, where you are going and for how long – sometimes a Single Trip policy might be cheaper than an Annual Multi-trip.  Also if you have been declined for an Annual Multi-trip policy, you might still get offered insurance if you choose a Single Trip policy.  But if you are planning to travel several times during a 12 month period, try for an Annual Multi-trip policy first. Annual Multi-trip: If you are planning to travel several times during a 12 month period, an Annual Multi-trip policy can save you money.  You can usually only buy an Annual Multi-trip policy up to 31 days in advance of when you want the policy to start.  If you get turned down for an Annual Multi-trip – or you think the cost is too much – its worth seeing if you can get a Single Trip policy instead.";

// Select age range
const ageRange = () => {
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

const Filters = ({ t }) => {
  const [age, changeAge] = useState({});
  const [insuranceType, changeInsuranceType] = useState({});
  const [tripLength, changeTripLength] = useState({});
  const [destination, changeDestination] = useState({});
  const [cruise, changeCruise] = useState({});
  const [when, changeWhen] = useState({});
  const [treatment, changeTreatment] = useState({});
  const [terminal, changeTerminal] = useState({});
  const [equipment, changeEquipment] = useState({});

  const handleAge = (e) => {
    let age = e.target.value;
    changeAge({ age });
  };

  const handleInsuranceType = (e) => {
    let insuranceType = e.target.value;
    changeInsuranceType({ insuranceType });
  };

  const handleTripLength = (e) => {
    let tripLength = e.target.value;
    changeTripLength({ tripLength });
  };

  const handleDestination = (e) => {
    let destination = e.target.value;
    changeDestination({ destination });
  };

  const handleCruise = (e) => {
    let cruise = e.target.value;
    changeCruise({ cruise });
  };

  const handleWhen = (e) => {
    let when = e.target.value;
    changeWhen({ when });
  };

  const handleTreatment = (e) => {
    let treatment = e.target.value;
    changeTreatment({ treatment });
  };

  const handleTerminal = (e) => {
    let terminal = e.target.value;
    changeTerminal({ terminal });
  };

  const handleEquipment = (e) => {
    let equipment = e.target.value;
    changeEquipment({ equipment });
  };

  const clearFilters = () => {
    changeInsuranceType({});
    changeTripLength({});
    changeDestination({});
    changeCruise({});
    changeWhen({});
    changeTreatment({});
    changeTerminal({});
    changeEquipment({});
    changeAge({ age: "" });
  };

  console.log(insuranceType);
  console.log(tripLength);
  console.log(destination);
  console.log(cruise);
  console.log(when);
  console.log(treatment);
  console.log(terminal);
  console.log(equipment);

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
        <span>{t("headings.filter")}</span>
        {process.browser ? (
          <span
            style={{ fontSize: "11px", color: "#003D8E", cursor: "pointer" }}
            onClick={(e) => clearFilters(e)}
          >
            {t("headings.clear")}
          </span>
        ) : (
          <a
            href="/listings"
            name=""
            style={{
              fontSize: "11px",
              color: "#003D8E",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            {t("headings.clear")}
          </a>
        )}
      </Heading>
      <FormDiv>
        <FilterFormFIeld>
          <Legend>
            {t("headings.age_at_time_of_travel")}
            <Tooltip hover text="To be supplied" />
          </Legend>
          <Select name="age" value={age.age} onChange={(e) => handleAge(e)}>
            <option value="">{t("headings.age_at_time_of_travel")}</option>
            {ageRange()}
          </Select>
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            {t("headings.filter_by_insurance_type")}
            <Tooltip minWidth="300px" hover text={insuranceTypeTip} />
          </Legend>
          {t("filters.insuranceType", { returnObjects: true }).map(
            ({ type, value }, i) => (
              <Radio
                key={i}
                checked={insuranceType.insuranceType === value}
                onChange={(e) => handleInsuranceType(e)}
                label={type}
                name="insuranceType"
                id={`type-${i}`}
                value={value}
              />
            )
          )}
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            {t("headings.filter_by_length_of_trip")}
            <Tooltip hover text="To be supplied" />
          </Legend>
          {t("filters.tripLength", { returnObjects: true }).map(
            ({ length, value }, i) => (
              <Radio
                key={i}
                checked={tripLength.tripLength === value}
                onChange={(e) => handleTripLength(e)}
                label={length}
                name="tripLength"
                id={`length-${i}`}
                value={value}
              />
            )
          )}
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            {t("headings.destination")}
            <Tooltip hover text="To be supplied" />
          </Legend>
          {t("filters.destination", { returnObjects: true }).map(
            ({ location, value }, i) => (
              <Radio
                key={i}
                checked={destination.destination === value}
                onChange={(e) => handleDestination(e)}
                label={location}
                name="destination"
                id={`location-${i}`}
                value={value}
              />
            )
          )}
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            {t("headings.is_your_trip_a_cruise")}?
            <Tooltip hover text="To be supplied" />
          </Legend>
          {t("filters.cruise", { returnObjects: true }).map(
            ({ response, value }, i) => (
              <Radio
                key={i}
                checked={cruise.cruise === value}
                onChange={(e) => handleCruise(e)}
                label={response}
                name="cruise"
                id={`cruise-${i}`}
                value={value}
              />
            )
          )}
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            {t("headings.when_are_you_travelling")}?
            <Tooltip hover text="To be supplied" />
          </Legend>
          {t("filters.when", { returnObjects: true }).map(
            ({ length, value }, i) => (
              <Radio
                key={i}
                checked={when.when === value}
                onChange={(e) => handleWhen(e)}
                label={length}
                name="length"
                id={`length-${i}`}
                value={value}
              />
            )
          )}
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            {t("headings.i_am_going_abroad_for_medical_treatment")}
            <Tooltip hover text="To be supplied" />
          </Legend>

          {t("filters.treatment", { returnObjects: true }).map(
            ({ response, value }, i) => (
              <Radio
                key={i}
                checked={treatment.treatment === value}
                onChange={(e) => handleTreatment(e)}
                label={response}
                name="treatment"
                id={`treatment-${i}`}
                value={value}
              />
            )
          )}
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            {t("headings.my_doctor_has_given_me_a_terminal_prognosis")}
            <Tooltip hover text="To be supplied" />
          </Legend>
          {t("filters.terminal", { returnObjects: true }).map(
            ({ response, value }, i) => (
              <Radio
                key={i}
                checked={terminal.terminal === value}
                onChange={(e) => handleTerminal(e)}
                label={response}
                name="terminal"
                id={`terminal-${i}`}
                value={value}
              />
            )
          )}
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            {t("headings.do_you_require_cover_for_medical_equipment")}?
            <Tooltip hover text="To be supplied" />
          </Legend>

          {t("filters.equipment", { returnObjects: true }).map(
            ({ response, value }, i) => (
              <Radio
                key={i}
                checked={equipment.equipment === value}
                onChange={(e) => handleEquipment(e)}
                label={response}
                name="equipment"
                id={`equipment-${i}`}
                value={value}
              />
            )
          )}
        </FilterFormFIeld>
        <Button primary>{t("headings.submit")}</Button>
      </FormDiv>
    </Form>
  );
};

export default Filters;
