import WithJs from "./withJs";
import WithoutJs from "./withoutJs";
import { i18n } from "../../Utils/translation/i18n";

const Results = ({ t }) => {
  {
    return process.browser ? <WithJs t={t} /> : <WithoutJs t={t} />;
  }
};

export default Results;
