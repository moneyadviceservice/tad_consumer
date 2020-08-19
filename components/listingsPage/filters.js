import { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { filterOfferings } from "./redux/actions";
import { FilterFormFIeld, FormDiv, Legend, Select } from "./dummy";

const Filters = ({ t, query, filterString }) => {
  const [age, changeAge] = useState({});
  const [trip_type, changeInsuranceType] = useState({});
  const [tripLength, changeTripLength] = useState({});
  const [cover_area, changeDestination] = useState({});
  const [cruise, changeCruise] = useState({});
  const [how_far_in_advance_trip_cover, changeWhen] = useState({});
  const [will_cover_undergoing_treatment, changeTreatment] = useState({});
  const [will_cover_terminal_prognosis, changeTerminal] = useState({});
  const [will_cover_specialist_equipment, changeEquipment] = useState({});

  const [cruise_30_days_max_age, changeCruise30Max] = useState({});
  const [cruise_45_days_max_age, changeCruise45Max] = useState({});
  const [cruise_55_days_max_age, changeCruise55Max] = useState({});

  const [land_30_days_max_age, changeLandMax30] = useState({});
  const [land_45_days_max_age, changeLandMax45] = useState({});
  const [land_55_days_max_age, changeLandMax55] = useState({});

  // console.log(filterString);

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

  const filtersValues = [
    trip_type,
    cover_area,
    how_far_in_advance_trip_cover,
    will_cover_undergoing_treatment,
    will_cover_terminal_prognosis,
    will_cover_specialist_equipment,
    cruise_30_days_max_age,
    cruise_45_days_max_age,
    cruise_55_days_max_age,
    land_30_days_max_age,
    land_45_days_max_age,
    land_55_days_max_age,
  ];

  const dispatch = useDispatch();

  const offerings = useSelector((state) => state.listings.offerings.hits);

  // processed the age into variant of cruise and land as required by algolia keys
  useEffect(() => {
    let processedAge = age.age;
    if (processedAge) {
      changeCruise30Max({ cruise_30_days_max_age: parseInt(processedAge) });
      changeCruise45Max({ cruise_45_days_max_age: parseInt(processedAge) });
      changeCruise55Max({ cruise_55_days_max_age: parseInt(processedAge) });
      changeLandMax30({ land_30_days_max_age: parseInt(processedAge) });
      changeLandMax45({ land_45_days_max_age: parseInt(processedAge) });
      changeLandMax55({ land_55_days_max_age: parseInt(processedAge) });
    }
  }, [age]);

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

  // const handleTripLength = (e) => {
  //   let tripLength = e.target.value;
  //   changeTripLength({ tripLength });
  // };

  const handleDestination = (e) => {
    let cover_area = e.target.value;
    changeDestination({ cover_area });
  };

  // const handleCruise = (e) => {
  //   let cruise = e.target.value;
  //   changeCruise({ cruise });
  // };

  const handleWhen = (e) => {
    let how_far_in_advance_trip_cover = e.target.value;
    changeWhen({ how_far_in_advance_trip_cover });
  };

  const handleTreatment = (e) => {
    let will_cover_undergoing_treatment = e.target.value;
    changeTreatment({ will_cover_undergoing_treatment });
  };

  const handleTerminal = (e) => {
    let will_cover_terminal_prognosis = e.target.value;
    changeTerminal({ will_cover_terminal_prognosis });
  };

  const handleEquipment = (e) => {
    let will_cover_specialist_equipment = e.target.value;
    changeEquipment({ will_cover_specialist_equipment });
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
    changeCruise30Max({});
    changeCruise45Max({});
    changeCruise55Max({});
    changeLandMax30({});
    changeLandMax45({});
    changeLandMax55({});
    changeAge({ age: "" });
  };

  // NONFRONTEND CODE STARTS

  let sortedFilters = [];

  // push the form values in the url in sortedFilters
  for (const property in query) {
    let bucket = {};
    bucket[`${property}`] = `${query[property]}`;
    sortedFilters.push(bucket);
  }

  // setup alternate values for form input to trigger checked attr
  let altTripType = {};
  let altCoverArea = {};
  let altWhen = {};
  let altCoverOngoingTreatment = {};
  let altTerminalPrognnosis = {};
  let altCoverSpecialEquipment = {};

  // Code to repopulate the input from the url
  if (!process.browser) {
    altTripType = sortedFilters[1]
      ? `${sortedFilters[1].trip_type}`
      : { trip_type: "" };
    altCoverArea = sortedFilters[2] ? `${sortedFilters[2].cover_area}` : "";
    altWhen = sortedFilters[3]
      ? `${sortedFilters[3].how_far_in_advance_trip_cover}`
      : {};
    altCoverOngoingTreatment = sortedFilters[4]
      ? `${sortedFilters[4].will_cover_undergoing_treatment}`
      : {};
    altTerminalPrognnosis = sortedFilters[5]
      ? `${sortedFilters[5].will_cover_terminal_prognosis}`
      : {};
    altCoverSpecialEquipment = sortedFilters[6]
      ? `${sortedFilters[6].will_cover_specialist_equipment}`
      : {};
  }

  // NONFRONTEND CODE ENDS

  return (
    <Form
      style={{ marginBottom: "40px", color: "#515151" }}
      action="/listings"
      method="post"
    >
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
          {t("filters.trip_type", { returnObjects: true }).map(
            ({ type, value }, i) => (
              <Radio
                key={i}
                onChange={(e) => handleInsuranceType(e)}
                label={type}
                name="trip_type"
                value={value}
                checked={
                  !process.browser
                    ? altTripType === value
                    : trip_type.trip_type === value
                }
              />
            )
          )}
        </FilterFormFIeld>
        {/* <FilterFormFIeld>
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
        </FilterFormFIeld> */}
        <FilterFormFIeld>
          <Legend>
            {t("headings.destination")}
            <Tooltip hover text="To be supplied" />
          </Legend>
          {t("filters.cover_area", { returnObjects: true }).map(
            ({ location, value }, i) => (
              <Radio
                key={i}
                onChange={(e) => handleDestination(e)}
                label={location}
                name="cover_area"
                value={value}
                checked={
                  !process.browser
                    ? altCoverArea === value
                    : cover_area.cover_area === value
                }
              />
            )
          )}
        </FilterFormFIeld>
        {/* <FilterFormFIeld>
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
        </FilterFormFIeld> */}
        <FilterFormFIeld>
          <Legend>
            {t("headings.when_are_you_travelling")}?
            <Tooltip hover text="To be supplied" />
          </Legend>
          {t("filters.how_far_in_advance_trip_cover", {
            returnObjects: true,
          }).map(({ length, value }, i) => (
            <Radio
              key={i}
              onChange={(e) => handleWhen(e)}
              label={length}
              name="how_far_in_advance_trip_cover"
              value={value}
              checked={
                !process.browser
                  ? altWhen === value
                  : how_far_in_advance_trip_cover.how_far_in_advance_trip_cover ===
                    value
              }
            />
          ))}
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            {t("headings.i_am_going_abroad_for_medical_treatment")}
            <Tooltip hover text="To be supplied" />
          </Legend>

          {t("filters.will_cover_undergoing_treatment", {
            returnObjects: true,
          }).map(({ response, value }, i) => (
            <Radio
              key={i}
              onChange={(e) => handleTreatment(e)}
              label={response}
              name="will_cover_undergoing_treatment"
              value={value}
              checked={
                !process.browser
                  ? altCoverOngoingTreatment === value
                  : will_cover_undergoing_treatment.will_cover_undergoing_treatment ===
                    value
              }
            />
          ))}
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            {t("headings.my_doctor_has_given_me_a_terminal_prognosis")}
            <Tooltip hover text="To be supplied" />
          </Legend>
          {t("filters.will_cover_terminal_prognosis", {
            returnObjects: true,
          }).map(({ response, value }, i) => (
            <Radio
              key={i}
              onChange={(e) => handleTerminal(e)}
              label={response}
              name="will_cover_terminal_prognosis"
              value={value}
              checked={
                !process.browser
                  ? altTerminalPrognnosis === value
                  : will_cover_terminal_prognosis.will_cover_terminal_prognosis ===
                    value
              }
            />
          ))}
        </FilterFormFIeld>
        <FilterFormFIeld>
          <Legend>
            {t("headings.do_you_require_cover_for_medical_equipment")}?
            <Tooltip hover text="To be supplied" />
          </Legend>

          {t("filters.will_cover_specialist_equipment", {
            returnObjects: true,
          }).map(({ response, value }, i) => (
            <Radio
              key={i}
              onChange={(e) => handleEquipment(e)}
              label={response}
              name="will_cover_specialist_equipment"
              id={`equipment-${i}`}
              value={value}
              checked={
                !process.browser
                  ? altCoverSpecialEquipment === value
                  : will_cover_specialist_equipment.will_cover_specialist_equipment ===
                    value
              }
              altCoverSpecialEquipment
            />
          ))}
        </FilterFormFIeld>
        {process.browser ? (
          ""
        ) : (
          <Button primary type="submit">
            {t("headings.submit")}
          </Button>
        )}
      </FormDiv>
    </Form>
  );
};

export default Filters;
