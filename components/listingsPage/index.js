import React, { Fragment } from "react";

import Filters from "./filters";
import Results from "./results";
import { Col } from "@moneypensionservice/directories";

const Listing = ({ t, query, offered }) => {
  return (
    <Fragment>
      <Col sizes={{ xs: 12, md: 4 }}>
        <Filters t={t} query={query}/>
      </Col>

      <Col sizes={{ xs: 12, md: 8 }}>
        <Results t={t} offered={offered} />
      </Col>
    </Fragment>
  );
};

export default Listing;
