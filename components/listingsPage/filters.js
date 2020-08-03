import { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { filterOfferings } from "./actions";

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
  const [trip_type, changeInsuranceType] = useState({});
  const [tripLength, changeTripLength] = useState({});
  const [cover_area, changeDestination] = useState({});
  const [cruise, changeCruise] = useState({});
  const [how_far_in_advance_trip_cover, changeWhen] = useState({});
  const [cover_undergoing_treatment, changeTreatment] = useState({});
  const [terminal_prognosis_cover, changeTerminal] = useState({});
  const [cover_for_specialist_equipment, changeEquipment] = useState({});

  const dispatch = useDispatch();

  const filtersValues = [
    age,
    trip_type,
    tripLength,
    cover_area,
    cruise,
    how_far_in_advance_trip_cover,
    cover_undergoing_treatment,
    terminal_prognosis_cover,
    cover_for_specialist_equipment,
  ];

  const offerings = useSelector((state) => state.data.offerings.hits);
  console.log(offerings);
  useEffect(() => {
    dispatch(filterOfferings(filtersValues));
  }, [filtersValues]);

  const handleAge = (e) => {
    let age = e.target.value;
    changeAge({ age });
  };

  const handleInsuranceType = (e) => {
    let trip_type = e.target.value;
    changeInsuranceType({ trip_type });
  };

  const handleTripLength = (e) => {
    let tripLength = e.target.value;
    changeTripLength({ tripLength });
  };

  const handleDestination = (e) => {
    let cover_area = e.target.value;
    changeDestination({ cover_area });
  };

  const handleCruise = (e) => {
    let cruise = e.target.value;
    changeCruise({ cruise });
  };

  const handleWhen = (e) => {
    let how_far_in_advance_trip_cover = e.target.value;
    changeWhen({ how_far_in_advance_trip_cover });
  };

  const handleTreatment = (e) => {
    let cover_undergoing_treatment = e.target.value;
    changeTreatment({ cover_undergoing_treatment });
  };

  const handleTerminal = (e) => {
    let terminal_prognosis_cover = e.target.value;
    changeTerminal({ terminal_prognosis_cover });
  };

  const handleEquipment = (e) => {
    let cover_for_specialist_equipment = e.target.value;
    changeEquipment({ cover_for_specialist_equipment });
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
            {t("headings.filter_by_trip_type")}
            <Tooltip minWidth="300px" hover text={insuranceTypeTip} />
          </Legend>
          {t("filters.trip_type", { returnObjects: true }).map(
            ({ type, value }, i) => (
              <Radio
                key={i}
                checked={trip_type.trip_type === value}
                onChange={(e) => handleInsuranceType(e)}
                label={type}
                name="trip_type"
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
                value={value}
              />
            )
          )}
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            {t("headings.cover_area")}
            <Tooltip hover text="To be supplied" />
          </Legend>
          {t("filters.cover_area", { returnObjects: true }).map(
            ({ location, value }, i) => (
              <Radio
                key={i}
                checked={cover_area.cover_area === value}
                onChange={(e) => handleDestination(e)}
                label={location}
                name="cover_area"
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
                value={value}
              />
            )
          )}
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            {t("headings.how_far_in_advance_trip_cover")}?
            <Tooltip hover text="To be supplied" />
          </Legend>
          {t("filters.how_far_in_advance_trip_cover", {
            returnObjects: true,
          }).map(({ length, value }, i) => (
            <Radio
              key={i}
              checked={
                how_far_in_advance_trip_cover.how_far_in_advance_trip_cover ===
                value
              }
              onChange={(e) => handleWhen(e)}
              label={length}
              name="length"
              value={value}
            />
          ))}
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            {t("headings.cover_undergoing_treatment")}
            <Tooltip hover text="To be supplied" />
          </Legend>

          {t("filters.cover_undergoing_treatment", { returnObjects: true }).map(
            ({ response, value }, i) => (
              <Radio
                key={i}
                checked={
                  cover_undergoing_treatment.cover_undergoing_treatment ===
                  value
                }
                onChange={(e) => handleTreatment(e)}
                label={response}
                name="cover_undergoing_treatment"
                value={value}
              />
            )
          )}
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            {t("headings.terminal_prognosis_cover")}
            <Tooltip hover text="To be supplied" />
          </Legend>
          {t("filters.terminal_prognosis_cover", { returnObjects: true }).map(
            ({ response, value }, i) => (
              <Radio
                key={i}
                checked={
                  terminal_prognosis_cover.terminal_prognosis_cover === value
                }
                onChange={(e) => handleTerminal(e)}
                label={response}
                name="terminal_prognosis_cover"
                value={value}
              />
            )
          )}
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            {t("headings.cover_for_specialist_equipment")}?
            <Tooltip hover text="To be supplied" />
          </Legend>

          {t("filters.cover_for_specialist_equipment", {
            returnObjects: true,
          }).map(({ response, value }, i) => (
            <Radio
              key={i}
              checked={
                cover_for_specialist_equipment.cover_for_specialist_equipment ===
                value
              }
              onChange={(e) => handleEquipment(e)}
              label={response}
              name="cover_for_specialist_equipment"
              value={value}
            />
          ))}
        </FilterFormFIeld>
        <Button primary>{t("headings.submit")}</Button>
      </FormDiv>
    </Form>
  );
};

export default Filters;
