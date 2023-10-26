import "./Container.css";
import Inputs from "./inputs";
import Result from "./result";

const Container = () => {
  return (
    <main className="container">
      <div className="container_inputs">
        <Inputs title="DAY" />
        <Inputs title="MONTH" />
        <Inputs title="YEAR" />
      </div>
      <div className="result">
        <Result result='00' period='year' />
        <Result  result='00' period='months'/>
        <Result  result='00' period='days'/>
      </div>
    </main>
  );
};

export default Container;
