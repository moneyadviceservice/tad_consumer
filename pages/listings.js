import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../Utils/translation/i18n";

import { Row, Col, Heading } from "@moneypensionservice/directories";
import { Section, ExtendedSection, InternalLink } from "../Utils/layouts";

import Listing from "../components/listingsPage";

const Listings = ({ t }) => {
  return (
    <Fragment>
      <Section constrained data-testid="contentRow">
        <Col sizes={{ xs: 12 }} data-testid="contentCol">
          <Heading level={1} color="#006A00" style={{ marginTop: "20px" }}>
            Find travel insurance providers if you have a serious medical
            condition
          </Heading>
        </Col>
      </Section>

      <ExtendedSection align="stretch">
        <Section constrained data-testid="contentRow">
          <Listing />
        </Section>
      </ExtendedSection>
    </Fragment>
  );
};

Listings.getInitialProps = async () => ({
  namespacesRequired: ["listings", "common", "footer"],
});

Listings.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("listings", "common", "footer")(Listings);
