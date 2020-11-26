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
import { withTranslation } from "../../Utils/translation/i18n";
import {
  ageRange,
  Select,
  FilterHead,
  FormDiv,
  TooltipParagraph,
  ToggleIcon,
  ExtHeading,
  FilterFormFIeld,
  Legend,
  TooltipText,
} from "./utils";
const SingleTrip = styled.div`
  display: ${(props) => (props.single ? "block" : "none")};
`;
const AnnualTrip = styled.div`
  display: ${(props) => (props.annual ? "block" : "none")};
`;

const Note = styled.span`
  display: ${(props) => (props.note ? "block" : "none")};
`;

const Filters = ({ t, query }) => {
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

  if (process.browser) {
    window.dataLayer = window.dataLayer || [];
  }

  // change Toogle visibility on mobile
  useEffect(() => {
    process.browser && window && window.innerWidth <= 850
      ? ToggleMobile(true)
      : ToggleMobile(false);
  }, []);

  const dispatch = useDispatch();


  // google tagging
  const tag = (e) => {
    let y;
    if (e.target.name === "age") {
      let x = e.target.value;
      if (x <= 17) {
        y = x;
      } else if (x >= 18 && x <= 24) {
        y = "18-24";
      } else if (x >= 25 && x <= 34) {
        y = "25-34";
      } else if (x >= 35 && x <= 44) {
        y = "35-44";
      } else if (x >= 45 && x <= 54) {
        y = "45-54";
      } else if (x >= 55 && x <= 64) {
        y = "55-64";
      } else if (x >= 65 && x <= 74) {
        y = "65-74";
      } else {
        y = "75+";
      }

      window.dataLayer.push({
        event: "travelDirectory_ageOption",
        ageRange: y,
      });
    } else {
      window.dataLayer.push({
        event: "travelDirectory_RadioButton",
        buttonName: e.target.name,
        buttonChoice: e.target.value,
      });
    }
  };

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
    tag(e);
    let age = e.target.value;
    changeAge({ age });
  };

  const handleInsuranceType = (e) => {
    let trip_type = e.target.value;
    tag(e);
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
    tag(e);
    let singleOption = e.target.value;
    changeSingleOption({ singleOption });
    changeAnnualOption({});
  };

  const handleAnnualOption = (e) => {
    tag(e);
    let annualOption = e.target.value;
    changeAnnualOption({ annualOption });
    changeSingleOption({});
  };

  const handleDestination = (e) => {
    tag(e);
    let cover_area = e.target.value;
    changeDestination({ cover_area });
  };

  const handleCruise = (e) => {
    tag(e);
    let cruise = e.target.value;
    changeCruise({ cruise });
  };

  const handleWhen = (e) => {
    tag(e);
    let how_far_in_advance_trip_cover_weeks = e.target.value;
    changeWhen({ how_far_in_advance_trip_cover_weeks });
  };

  const handleTerminal = (e) => {
    tag(e);
    let will_cover_terminal_prognosis = e.target.value;
    changeTerminal({ will_cover_terminal_prognosis });
  };

  const handleEquipment = (e) => {
    tag(e);
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
    // NONFRONTEND CODE STARTS

  // setup alternate values for form input to trigger checked attr
  let altAge = t("headings.age_at_time_of_travel");
  let altTripType = "";
  let altCoverArea = "";
  let altCruise= "";
  let altWhen = "";
  let altCoverOngoingTreatment = "";
  let altTerminalPrognnosis = "";
  let altCoverSpecialEquipment = "";
  let altAnnualOption = "";
  let altSingleOption = "";

  // Code to repopulate the input from the url
 
  for (const property in query) {
    if (`${property}` === "cruise_30_days_max_age") {
      altAge = `${query[property]}`;
    }
    if (`${property}` === "trip_type") {
      altTripType = `${query[property]}`;
    }
    if (`${property}` === "annualOption") {
      altAnnualOption = `${query[property]}`;
    }
    if (`${property}` === "singleOption") {
      altSingleOption = `${query[property]}`;
    }
    if (`${property}` === "cover_area") {
      altCoverArea = `${query[property]}`;
    }
    if (`${property}` === "cruise") {
      altCruise = `${query[property]}`;
    }
    if (`${property}` === "how_far_in_advance_trip_cover_weeks") {
      altWhen = `${query[property]}`;
    }
    if (`${property}` === "will_cover_undergoing_treatment") {
      altCoverOngoingTreatment = `${query[property]}`;
    }
    if (`${property}` === "will_cover_terminal_prognosis") {
      altTerminalPrognnosis = `${query[property]}`;
    }
    if (`${property}` === "will_cover_specialist_equipment") {
      altCoverSpecialEquipment = `${query[property]}`;
    }
  }
  // NONFRONTEND CODE ENDS

  return (
    <Form 
      action="/listings"
      method="post"
      style={{ marginBottom: "40px", color: "#515151" }} 
      data-testid="filterForm">
      <ExtHeading level={3} style={{}}>
        <ToggleIcon onClick={(e) => handleMobile(e)} >
          {mobile && mobile === true ? "+" : "-"}
        </ToggleIcon>
        <span>{t("headings.filter")}</span>

        <Anchor
          onClick={(e) => clearFilters(e)}
          textAlign="right"
          textSize="11px"
          width="auto"
          href="/listings"
          style={{
            color: "inherit",
            outline: "none",
          }}
        >
          {t("headings.clear")}
        </Anchor>
      </ExtHeading>

      <FormDiv isMobile={mobile}>
        <FilterFormFIeld data-testid="filterFormField">
          <Legend>
            {t("headings.age_at_time_of_travel")}
            <TooltipText
              minWidth="200px"
              side="left"
              text={<TooltipParagraph>{t("toolTips.age")}</TooltipParagraph>}
              data-testid="filterTooltip"
            />
          </Legend>

          <Select name="age" value={age.age} onChange={(e) => handleAge(e)} aria-label="Age at time of travel" data-testid="filterSelect">
          <option value="" selected={!process.browser ? altAge : age.age}>
              {!process.browser ? altAge : t("headings.age_at_time_of_travel")}
            </option>
            {ageRange()}
          </Select>
        </FilterFormFIeld>

        {/* Client Insurance Type */}
        {process.browser ? (
          <FilterFormFIeld data-testid="filterFormField">
            <Legend>
              {t("headings.filter_by_insurance_type")}
              <TooltipText
                minWidth="300px"
                text={
                  <>
                    <Heading color="#515151" level={4} style={{ marginTop: 0 }}>
                      {t("toolTips.insuranceType.title")}
                    </Heading>
                    <TooltipParagraph style={{ marginBottom: "10px" }}>
                      {t("toolTips.insuranceType.para_1")}
                    </TooltipParagraph>
                    <TooltipParagraph>
                      {t("toolTips.insuranceType.para_2")}
                    </TooltipParagraph>
                  </>
                }
                data-testid="filterTooltip"
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
          // Server
            <FilterFormFIeld data-testid="filterFormField">
              <Legend> {t("headings.filter_by_insurance_type")}</Legend>
              {t("filters.trip_type", { returnObjects: true }).map(
                ({ type, value }, i) => (
                  <Radio
                    key={i}
                    checked={altTripType === value}
                    onChange={(e) => handleInsuranceType(e)}
                    label={type}
                    name="trip_type"
                    value={value}
                  />
                )
              )}
              
            </FilterFormFIeld>
          )}


        {/*  annual and single options */}
        {!process.browser?(
          <FilterFormFIeld>
            <Legend>
            {t("headings.filter_by_length_of_trip")}
            </Legend>
            <Paragraph textSize="12px">
              Choose only if you selected Single Trip
              </Paragraph>
                {t("filters.singleTripLength", { returnObjects: true }).map(
                  ({ length, value }, i) => (
                    <Radio
                      style={{ fontSize: "13px" }}
                      key={i}
                      checked={altSingleOption === value}
                      onChange={(e) => handleTripLength(e)}
                      label={length}
                      name="singleOption"
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
                    checked={altAnnualOption === value}
                    onChange={(e) => handleTripLength(e)}
                    label={length}
                    name="annualOption"
                    value={value}
                  />
                )
              )}
         </FilterFormFIeld>
        ):(
          <FilterFormFIeld data-testid="filterFormField">
          <Legend>{t("headings.filter_by_length_of_trip")}</Legend>
          <Note note={note}>{t("headings.selectInsurance")}</Note>
          <SingleTrip single={single}>
            <span style={{ fontSize: "14px" }}>
              {t("headings.selectDuration")}
              <TooltipText
                minWidth="200px"
                side="left"
                text={
                  <TooltipParagraph>
                    {t("toolTips.singleTrip")}
                  </TooltipParagraph>
                }
                data-testid="filterTooltip"
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
              {t("headings.foreachTrip")}
              <TooltipText
                minWidth="200px"
                side="left"
                text={
                  <TooltipParagraph>
                    {t("toolTips.annualTrip")}
                  </TooltipParagraph>
                }
                data-testid="filterTooltip"
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
        )}
        



        <FilterFormFIeld data-testid="filterFormField">
          <Legend>
            {t("headings.destination")}
            <TooltipText
              minWidth="230px"
              side="bottom"
              text={
                <TooltipParagraph>{t("toolTips.destination")}</TooltipParagraph>
              }
              data-testid="filterTooltip"
            />
          </Legend>
          {t("filters.cover_area", { returnObjects: true }).map(
            ({ location, value }, i) => (
              <Radio
                key={i}
                checked={!process.browser
                  ? altCoverArea === value
                  : cover_area.cover_area === value}
                onChange={(e) => handleDestination(e)}
                label={location}
                name="cover_area"
                value={value}
              />
            )
          )}
        </FilterFormFIeld>
        <FilterFormFIeld data-testid="filterFormField">
          <Legend>
            {t("headings.is_your_trip_a_cruise")}?
            <TooltipText
              minWidth="230px"
              side="bottom"
              text={<TooltipParagraph>{t("toolTips.cruise")}</TooltipParagraph>}
              data-testid="filterTooltip"
            />
          </Legend>
          {t("filters.cruise", { returnObjects: true }).map(
            ({ response, value }, i) => (
              <Radio
                key={i}
                checked={!process.browser
                  ? altCruise === value
                  : cruise.cruise ===
                    value}
                onChange={(e) => handleCruise(e)}
                label={response}
                name="cruise"
                value={value}
              />
            )
          )}
        </FilterFormFIeld>
        <FilterFormFIeld data-testid="filterFormField">
          <Legend>
            {t("headings.when_are_you_travelling")}?
            <TooltipText
              minWidth="230px"
              side="left"
              text={<TooltipParagraph>{t("toolTips.when")}</TooltipParagraph>}
              data-testid="filterTooltip"
            />
          </Legend>
          {t("filters.how_far_in_advance_trip_cover_weeks", {
            returnObjects: true,
          }).map(({ when, time }, i) => (
            <Radio
              key={i}
              checked={
                !process.browser
                  ? altWhen === time
                  : how_far_in_advance_trip_cover_weeks.how_far_in_advance_trip_cover_weeks ===
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

        <FilterFormFIeld data-testid="filterFormField">
          <Legend>
            {t("headings.my_doctor_has_given_me_a_terminal_prognosis")}
          </Legend>
          {t("filters.will_cover_terminal_prognosis", {
            returnObjects: true,
          }).map(({ terminal, feedback }, i) => (
            <Radio
              key={i}
              checked={
                !process.browser
                ? altTerminalPrognnosis === feedback
                : will_cover_terminal_prognosis.will_cover_terminal_prognosis ===
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
        <FilterFormFIeld data-testid="filterFormField">
          <Legend>
            {t("headings.do_you_require_cover_for_medical_equipment")}?
            <TooltipText
              minWidth="230px"
              side="bottom"
              text={
                <TooltipParagraph>{t("toolTips.equipment")}</TooltipParagraph>

              }
              data-testid="filterTooltip"
            />
          </Legend>

          {t("filters.will_cover_specialist_equipment", {
            returnObjects: true,
          }).map(({ response, value }, i) => (
            <Radio
              key={i}
              checked={
                !process.browser
                  ? altCoverSpecialEquipment === value
                  : will_cover_specialist_equipment.will_cover_specialist_equipment ===
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

export default withTranslation("listings")(Filters);



