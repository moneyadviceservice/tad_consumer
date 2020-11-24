import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../Utils/translation/i18n";
import styled from "styled-components";
import { Col, Heading, resolveMedia } from "@moneypensionservice/directories";
import { Section, ExtendedSection } from "../Utils/layouts";
import { randomizeResult, filterFirms} from "../components/listingsPage/utils";
import Title from "../components/title";

import {
  getAlgoFirms,
  getAlgoOfferings,
} from "../components/listingsPage/redux/actions";

import Listing from "../components/listingsPage";

const ListingSection = styled(Section)`
  padding: 0;
  ${resolveMedia.md`

`};
`;





const Listings = ({ t, query, offered }) => {
  return (
    <Fragment>
      <Section constrained data-testid="contentRow">
        <Col sizes={{ xs: 12 }} data-testid="contentCol">
          <Title />
        </Col>
      </Section>

      <ExtendedSection align="stretch" style={{ paddingTop: 0 }}>
        <ListingSection constrained data-testid="contentRow">
          <Listing t={t}  query={query} offered={offered}/>
        </ListingSection>
      </ExtendedSection>
    </Fragment>
  );
};

Listings.getInitialProps = async ({ reduxStore, query }) => {
  await reduxStore.dispatch(getAlgoFirms());
  await reduxStore.dispatch(getAlgoOfferings());
  const shuffledfirm = await reduxStore.getState().listings.firms.hits;
  randomizeResult(shuffledfirm);


  const offerings = await reduxStore.getState().listings.offerings.hits;
  const firms = await reduxStore.getState().listings.firms.hits;

  
 let filteredFirm = []



  if(Object.keys(query).length === 0 && query.constructor === Object){
    filteredFirm = shuffledfirm
  }


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

  console.log("pool", filteredPool)

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

        const selectedFirm = firms.map((firm) => {
          if (firm.offering_ids.some((ele) => flatOffered.includes(ele))) {
            return firm;
          }
        });


        // filtered empty object out of the selectedFirm
        filteredFirm = selectedFirm.filter((selected) => {
          return selected != null;
        });

          return {
            namespacesRequired: ["listings", "common", "footer"],
            query: query,
            offered: filteredFirm

          };
        };

Listings.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("listings", "common", "footer")(Listings);
