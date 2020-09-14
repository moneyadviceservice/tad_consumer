import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../Utils/translation/i18n";
import styled from "styled-components";
import { Col, Heading, resolveMedia } from "@moneypensionservice/directories";
import { Section, ExtendedSection } from "../Utils/layouts";
import { randomizeResult } from "../components/listingsPage/dummy";
import Title from "../Utils/layouts/title";

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

const Listings = ({ t }) => {
  return (
    <Fragment>
      <Section constrained data-testid="contentRow">
        <Col sizes={{ xs: 12 }} data-testid="contentCol">
          <Title />
        </Col>
      </Section>

      <ExtendedSection align="stretch" style={{ paddingTop: 0 }}>
        <ListingSection constrained data-testid="contentRow">
          <Listing t={t} />
        </ListingSection>
      </ExtendedSection>
    </Fragment>
  );
};

Listings.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(getAlgoFirms());
  await reduxStore.dispatch(getAlgoOfferings());
  const shuffledfirm = await reduxStore.getState().listings.firms.hits;
  randomizeResult(shuffledfirm);

  return {
    namespacesRequired: ["listings", "common", "footer"],
  };
};

Listings.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("listings", "common", "footer")(Listings);
