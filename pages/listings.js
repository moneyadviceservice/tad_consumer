import React, { Fragment } from "react";
import { withTranslation } from "../components/translation/i18n";

import { Row, Col } from "@moneypensionservice/directories";

const Listings = () => {
  return (
    <Fragment>
      <Row margin="auto" constrained>
        <Col debug>H1</Col>
      </Row>
      <Row margin="auto" constrained>
        <Col sizes={{ xs: 12, md: 4 }} debug>
          Filter Form
        </Col>
        <Col debug>Result List</Col>
      </Row>
    </Fragment>
  );
};

export default withTranslation("listings")(Listings);
