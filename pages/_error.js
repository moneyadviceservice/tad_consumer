import { Row, NotFound } from "@moneypensionservice/directories";
import { i18n } from "../Utils/translation/i18n";

function Error() {
  return (
    <Row justify="center" style={{ borderBottom: "1px solid #cbdae0" }}>
      <NotFound currentLng={i18n.language} />
    </Row>
  );
}

Error.getInitialProps = async () => ({});

export default Error;



