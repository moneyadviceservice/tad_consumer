import React, { Fragment } from "react";
import PropTypes from "prop-types";
import pdfHelper from "../components/listingsPage/results/pdfHelper"

import { withTranslation } from "../Utils/translation/i18n";
import styled from "styled-components";
import { Col, resolveMedia } from "@moneypensionservice/directories";
import { Section, ExtendedSection } from "../Utils/layouts";
import { randomizeResult, listingsPDF, displayFirms} from "../components/listingsPage/utils";
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

Listings.getInitialProps = async ({ reduxStore, query, req, res }) => {
  await reduxStore.dispatch(getAlgoFirms());
  await reduxStore.dispatch(getAlgoOfferings());
  const shuffledfirm = await reduxStore.getState().listings.firms.hits;
  randomizeResult(shuffledfirm);
  const offerings = await reduxStore.getState().listings.offerings.hits;

  let filteredFirm = []

  const exportPDF = query.exportPDF === 'true';
  const isServer = !!req;
  
  if (isServer && exportPDF) {
    const buffer = await pdfHelper.componentToPDFBuffer(
      listingsPDF(shuffledfirm)  
    );
    res.setHeader(
      'Content-disposition',
      'attachment; filename="listings.pdf',
      );
    res.type('pdf');
    res.send(buffer);
  }

  if(Object.keys(query).length === 0 && query.constructor === Object){
    filteredFirm = shuffledfirm
  }
  filteredFirm = displayFirms(query, offerings, shuffledfirm)
  
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
