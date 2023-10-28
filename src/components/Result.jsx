import "./Result.css";

const Result = ({ period, result }) => {
  return (
    <section>
      <p className="result_date">
        <span className="result_number">{result}</span>
        {period}
      </p>
    </section>
  );
};

export default Result;
