import React, { Fragment } from "react";

import Filters from "./filters";
import Results from "./results";
import { Row, Col, Heading } from "@moneypensionservice/directories";

const Listing = ({ t, query, filterString, result }) => {
  return (
    <Fragment>
      <Col sizes={{ xs: 12, md: 4 }}>
        <Filters t={t} query={query} filterString={filterString} />
      </Col>
      <Col sizes={{ xs: 12, md: 8 }}>
        <Results t={t} query={query} result={result} />
      </Col>
    </Fragment>
  );
};

export default Listing;
