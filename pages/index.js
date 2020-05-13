import { Fragment } from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../components/translation/i18n";

const Homepage = ({ t }) => {
  return (
    <Fragment>
      <h1>Home</h1>
    </Fragment>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Homepage);
