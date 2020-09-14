import { useState, useEffect } from "react";
import {
  Heading,
  Radio,
  Button,
  Form,
  Paragraph,
  Anchor,
} from "@moneypensionservice/directories";

import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { filterOfferings } from "./redux/actions";
import {
  ageRange,
  Select,
  FilterHead,
  FormDiv,
  ClearButton,
  ToggleIcon,
  ExtHeading,
  FilterFormFIeld,
  Legend,
  TooltipText,
} from "./dummy";

const Filters = ({ t }) => {
  const [age, changeAge] = useState({});
  const [trip_type, changeInsuranceType] = useState({});
  const [tripLength, changeTripLength] = useState({});
  const [singleOption, changeSingleOption] = useState({});
  const [annualOption, changeAnnualOption] = useState({});
  const [cover_area, changeDestination] = useState({});
  const [cruise, changeCruise] = useState({});
  const [how_far_in_advance_trip_cover_weeks, changeWhen] = useState({});
  const [will_cover_terminal_prognosis, changeTerminal] = useState({});
  const [will_cover_specialist_equipment, changeEquipment] = useState({});

  const [cruise_30_days_max_age, changeCruise30Max] = useState({});
  const [cruise_45_days_max_age, changeCruise45Max] = useState({});
  const [cruise_55_days_max_age, changeCruise55Max] = useState({});

  const [land_30_days_max_age, changeLandMax30] = useState({});
  const [land_45_days_max_age, changeLandMax45] = useState({});
  const [land_55_days_max_age, changeLandMax55] = useState({});

  // console.log(cruise, singleOption, annualOption);
  const filtersValues = [
    trip_type,
    cover_area,
    cruise,
    how_far_in_advance_trip_cover_weeks,
    singleOption,
    annualOption,
    will_cover_terminal_prognosis,
    will_cover_specialist_equipment,
    cruise_30_days_max_age,
    cruise_45_days_max_age,
    cruise_55_days_max_age,
    land_30_days_max_age,
    land_45_days_max_age,
    land_55_days_max_age,
  ];

  // Toggles

  const [annual, changeAnnualShow] = useState(false);
  const [single, changeSingleShow] = useState(false);
  const [note, changeNote] = useState(true);
  const [mobile, ToggleMobile] = useState(false);

  // change Toogle visibility on mobile
  useEffect(() => {
    process.browser && window && window.innerWidth <= 850
      ? ToggleMobile(true)
      : ToggleMobile(false);
  }, []);

  const SingleTrip = styled.div`
    display: ${(props) => (props.single ? "block" : "none")};
  `;
  const AnnualTrip = styled.div`
    display: ${(props) => (props.annual ? "block" : "none")};
  `;

  const Note = styled.span`
    display: ${(props) => (props.note ? "block" : "none")};
  `;

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

  const handleMobile = (e) => {
    ToggleMobile(!mobile);
  };

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
    if (trip_type === "Single Trip") {
      changeSingleShow(true);
      changeAnnualShow(false);
      changeNote(false);
    }
    if (trip_type === "Annual Multi-trip") {
      changeAnnualShow(true);
      changeSingleShow(false);
      changeNote(false);
    }
  };

  const handleSingleOption = (e) => {
    let singleOption = e.target.value;
    changeSingleOption({ singleOption });
    changeAnnualOption({});
  };

  const handleAnnualOption = (e) => {
    let annualOption = e.target.value;
    changeAnnualOption({ annualOption });
    changeSingleOption({});
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
    let how_far_in_advance_trip_cover_weeks = e.target.value;
    changeWhen({ how_far_in_advance_trip_cover_weeks });
  };

  const handleTerminal = (e) => {
    let will_cover_terminal_prognosis = e.target.value;
    changeTerminal({ will_cover_terminal_prognosis });
  };

  const handleEquipment = (e) => {
    let will_cover_specialist_equipment = e.target.value;
    changeEquipment({ will_cover_specialist_equipment });
  };

  const clearFilters = (e) => {
    e.preventDefault();
    changeInsuranceType({});
    changeSingleOption({});
    changeAnnualOption({});
    changeDestination({});
    changeCruise({});
    changeWhen({});
    // changeTreatment({});
    changeTerminal({});
    changeEquipment({});
    changeCruise30Max({});
    changeCruise45Max({});
    changeCruise55Max({});
    changeLandMax30({});
    changeLandMax45({});
    changeLandMax55({});
    changeAge({ age: "" });
    changeAnnualShow(false);
    changeSingleShow(false);
    changeNote(true);
  };

  return (
    <Form style={{ marginBottom: "40px", color: "#515151" }}>
      <ExtHeading level={3} style={{}}>
        <ToggleIcon onClick={(e) => handleMobile(e)}>
          {mobile && mobile === true ? "+" : "-"}
        </ToggleIcon>
        <span>{t("headings.filter")}</span>

        <Anchor
          onClick={(e) => clearFilters(e)}
          textAlign="right"
          textSize="11px"
          width="auto"
          href=""
          style={{
            textDecoration: "none",
            background: "inherit",
            color: "inherit",
            outline: "none",
          }}
        >
          {t("headings.clear")}
        </Anchor>
      </ExtHeading>

      <FormDiv isMobile={mobile}>
        <FilterFormFIeld>
          <Legend>
            {t("headings.age_at_time_of_travel")}
            <TooltipText
              minWidth="200px"
              side="left"
              text={t("toolTips.age")}
            />
          </Legend>
          <Select name="age" value={age.age} onChange={(e) => handleAge(e)}>
            <option value="">
              {t("headings.age_at_time_of_travel_select")}
            </option>
            {ageRange()}
          </Select>
        </FilterFormFIeld>

        {/* Client Insurance Type */}
        {process.browser ? (
          <FilterFormFIeld>
            <Legend>
              {t("headings.filter_by_insurance_type")}
              <TooltipText
                minWidth="300px"
                text={t("toolTips.insuranceType")}
              />
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
        ) : (
          <FilterFormFIeld>
            <Legend>{t("headings.filter_by_insurance_type")}</Legend>
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
            <Heading level={4}>
              {t("headings.filter_by_length_of_trip")}
            </Heading>
            <Paragraph textSize="12px">
              Choose only if you selected Single Trip
            </Paragraph>
            {t("filters.singleTripLength", { returnObjects: true }).map(
              ({ length, value }, i) => (
                <Radio
                  style={{ fontSize: "13px" }}
                  key={i}
                  checked={tripLength.tripLength === value}
                  onChange={(e) => handleTripLength(e)}
                  label={length}
                  name="tripLength"
                  value={value}
                />
              )
            )}
            <Paragraph textSize="12px" style={{ marginTop: "20px" }}>
              Choose only if you selected Annual Multi-trip
            </Paragraph>
            {t("filters.annualTripLength", { returnObjects: true }).map(
              ({ length, value }, i) => (
                <Radio
                  style={{ fontSize: "13px" }}
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
        )}

        <FilterFormFIeld>
          <Legend>{t("headings.filter_by_length_of_trip")}</Legend>
          <Note note={note}>Please select the type of insurance first</Note>
          <SingleTrip single={single}>
            <span style={{ fontSize: "14px" }}>
              select one of the durations
              <TooltipText
                minWidth="200px"
                side="left"
                text={t("toolTips.singleTrip")}
              />
            </span>
            {t("filters.singleTripLength", { returnObjects: true }).map(
              ({ length, value }, i) => (
                <Radio
                  key={i}
                  checked={singleOption.singleOption === value}
                  onChange={(e) => handleSingleOption(e)}
                  label={length}
                  name="singleOption"
                  value={value}
                />
              )
            )}
          </SingleTrip>
          <AnnualTrip annual={annual}>
            <span style={{ fontSize: "14px" }}>
              for each individual trip
              <TooltipText
                minWidth="200px"
                side="left"
                text={t("toolTips.annualTrip")}
              />
            </span>

            {t("filters.annualTripLength", { returnObjects: true }).map(
              ({ length, value }, i) => (
                <Radio
                  key={i}
                  checked={annualOption.annualOption === value}
                  onChange={(e) => handleAnnualOption(e)}
                  label={length}
                  name="annualOption"
                  value={value}
                />
              )
            )}
          </AnnualTrip>
        </FilterFormFIeld>

        <FilterFormFIeld>
          <Legend>
            {t("headings.destination")}
            <TooltipText
              minWidth="230px"
              side="bottom"
              text={t("toolTips.destination")}
            />
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
            <TooltipText
              minWidth="230px"
              side="bottom"
              text={t("toolTips.cruise")}
            />
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
            {t("headings.when_are_you_travelling")}?
            <TooltipText
              minWidth="230px"
              side="left"
              text={t("toolTips.when")}
            />
          </Legend>
          {t("filters.how_far_in_advance_trip_cover_weeks", {
            returnObjects: true,
          }).map(({ when, time }, i) => (
            <Radio
              key={i}
              checked={
                how_far_in_advance_trip_cover_weeks.how_far_in_advance_trip_cover_weeks ===
                time
              }
              onChange={(e) => handleWhen(e)}
              label={when}
              name="how_far_in_advance_trip_cover_weeks"
              value={time}
            />
          ))}
        </FilterFormFIeld>
        {/* Prognosis */}

        <FilterFormFIeld>
          <Legend>
            {t("headings.my_doctor_has_given_me_a_terminal_prognosis")}
          </Legend>
          {t("filters.will_cover_terminal_prognosis", {
            returnObjects: true,
          }).map(({ terminal, feedback }, i) => (
            <Radio
              key={i}
              checked={
                will_cover_terminal_prognosis.will_cover_terminal_prognosis ===
                feedback
              }
              onChange={(e) => handleTerminal(e)}
              label={terminal}
              name="will_cover_terminal_prognosis"
              value={feedback}
            />
          ))}
        </FilterFormFIeld>
        {/* Equipment */}
        <FilterFormFIeld>
          <Legend>
            {t("headings.do_you_require_cover_for_medical_equipment")}?
            <TooltipText
              minWidth="230px"
              side="bottom"
              text={t("toolTips.equipment")}
            />
          </Legend>

          {t("filters.will_cover_specialist_equipment", {
            returnObjects: true,
          }).map(({ response, value }, i) => (
            <Radio
              key={i}
              checked={
                will_cover_specialist_equipment.will_cover_specialist_equipment ===
                value
              }
              onChange={(e) => handleEquipment(e)}
              label={response}
              name="will_cover_specialist_equipment"
              value={value}
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
