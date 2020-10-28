import React, { Fragment } from "react";

import Filters from "./filters";
import Results from "./results";
import { Col } from "@moneypensionservice/directories";

const Listing = ({ t }) => {
  return (
    <Fragment>
      <Col sizes={{ xs: 12, md: 4 }}>
        <Filters t={t}/>
      </Col>
      <Col sizes={{ xs: 12, md: 8 }}>
        <Results t={t} />
      </Col>
    </Fragment>
  );
};

export default Listing;
