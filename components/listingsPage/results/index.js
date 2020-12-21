import WithJs from "./withJs";
import WithoutJs from "./withoutJs";


const Results = ({ t, offered }) => {
  {
    return (process.browser ? (
      <WithJs t={t} />
    ) : (
      <WithoutJs t={t} offered={offered} />
    ));
  }
};

export default Results;




