import React, { Fragment } from "react";

import Filters from "./Filters";
import Results from "./Results";
import { Row, Col, Heading } from "@moneypensionservice/directories";

const Listing = ({ t }) => {
  return (
    <Fragment>
      <Col sizes={{ xs: 12, md: 4 }}>
        <Filters t={t} />
      </Col>
      <Col sizes={{ xs: 12, md: 8 }}>
        <Results t={t} />
      </Col>
    </Fragment>
  );
};

export default Listing;
