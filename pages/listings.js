import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../Utils/translation/i18n";
import styled from "styled-components";
import { Col, Heading, resolveMedia } from "@moneypensionservice/directories";
import { Section, ExtendedSection } from "../Utils/layouts";

import { FILTER_OFFERING_BACK } from "../components/listingsPage/redux/constants";
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

const Listings = ({ t, query, filterString, result }) => {
  return (
    <Fragment>
      <Section constrained data-testid="contentRow">
        <Col sizes={{ xs: 12 }} data-testid="contentCol">
          <Heading level={1} color="#006A00" style={{ marginTop: "20px" }}>
            {t("headings.main")}
          </Heading>
        </Col>
      </Section>

      <ExtendedSection align="stretch" style={{ paddingTop: 0 }}>
        <ListingSection constrained data-testid="contentRow">
          <Listing
            t={t}
            query={query}
            filterString={filterString}
            result={result}
          />
        </ListingSection>
      </ExtendedSection>
    </Fragment>
  );
};

Listings.getInitialProps = async ({ reduxStore, query }) => {
  await reduxStore.dispatch(getAlgoFirms());
  await reduxStore.dispatch(getAlgoOfferings());
  const firms = reduxStore.getState().listings.firms.hits;

  const algoliasearch = require("algoliasearch");
  const client = algoliasearch(
    "0K37IDKMFY",
    "e86ea9a6aba13065305eb793da96f481"
  );

  const companies = client.initIndex("travel-firms");
  const offerings = client.initIndex("travel-firm-offerings");
  let result;
  var filterArray = [];
  for (var key in query) {
    if (query.hasOwnProperty(key)) {
      let querying = `${query[key]}`;
      if (
        key === "cruise_30_days_max_age" ||
        key === "cruise_45_days_max_age" ||
        key === "cruise_55_days_max_age" ||
        key === "land_30_days_max_age" ||
        key === "land_45_days_max_age" ||
        key === "land_55_days_max_age"
      ) {
        filterArray.push(key + " = " + querying);
        // filterArray.push(key + ":" + 0 + " TO " + querying);
        // price:5.99 TO 100
      } else filterArray.push(key + ":" + '"' + querying + '"');
    }
  }
  const filterString = filterArray.join(" AND ");
  // console.log(filterString);
  if (!filterString) {
    result = firms;
  }

  if (filterString) {
    const offerIDs = await offerings.search("", {
      filters: filterString,
      attributesToRetrieve: ["objectID"],
    });

    console.log(offerIDs.hits.length);

    if (offerIDs.hits.length === 0) {
      result =
        "There are no results matching your search criteria. Please amend your criteria and try again";
    }

    if (offerIDs.hits.length > 0) {
      const selectedFirms = await offerIDs.hits.map((company) => {
        return company.objectID;
      });

      result = selectedFirms;

      let firmString = [];
      for (var key in selectedFirms) {
        firmString.push("offering_ids" + "=" + selectedFirms[key]);
      }
      const joinedFirmString = await firmString.join(" OR ");

      const callFirms = await companies.search("", {
        filters: joinedFirmString,
      });

      // console.log(callFirms);
      result = callFirms.hits;
    }
  }

  return {
    namespacesRequired: ["listings", "common", "footer"],
    query: query,
    filterString: filterString,
    result: result,
  };
};

Listings.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("listings", "common", "footer")(Listings);
