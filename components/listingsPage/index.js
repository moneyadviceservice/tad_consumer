import React, { Fragment } from "react";

import Filters from "./filters";
import Results from "./results";
import { Row, Col, Heading } from "@moneypensionservice/directories";

const Listing = () => {
  return (
    <Fragment>
      <Col sizes={{ xs: 12, md: 4 }}>
        <Filters />
      </Col>
      <Results />
    </Fragment>
  );
};

export default Listing;
