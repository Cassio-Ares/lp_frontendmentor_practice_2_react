import { useState } from "react";
import Btn from "./Btn";
import "./Container.css";
import Inputs from "./inputs";
import Result from "./result";
import Error from "./Error";

const Container = () => {
  /**
   * states results
   */
  const [day, setDay] = useState("--");
  const [months, setMonths] = useState("--");
  const [year, setYear] = useState("--");

  /**
   * state value
   */
  const [valueDay, setValueDay] = useState();
  const [valueMonths, setValueMonths] = useState();
  const [valueYear, setValueYear] = useState();

  /**
   * state ERROR
   */
  const [errorDay, setErrorDay] = useState(false);
  const [errorMonth, setErrorMonth] = useState(false);
  const [errorYear, setErrorYear] = useState(false);


  /**
   * date now
   */

  const nowDate = new Date();

  /**
   * Validation and submit 
   */

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date(valueYear, valueMonths - 1, valueDay);

    if (isNaN(valueDay) || valueDay <= 0 || valueDay > 31) {
      setErrorDay(true);
      e.preventDefault();
    } else if (
      isNaN(valueMonths - 1) ||
      valueMonths <= 0 ||
      valueMonths - 1 >= 12
    ) {
      setErrorMonth(true);
      e.preventDefault();
    } else if (isNaN(valueYear) || valueYear > new Date().getFullYear()) {
      setErrorYear(true);
      e.preventDefault();
    } else {
       const min = (nowDate - date) / 60000

       const yearTotal =  Math.floor(min / (365*24*60));
       const monthsTotal =  Math.floor((min % (365*24*60))/(30*24*60));
       const dayTotal = Math.floor((min % (min % (356*24*36))/(30*24*60)) % (24*60));
      
       setDay(dayTotal)
       setMonths(monthsTotal)
       setYear(yearTotal)

       setErrorDay(false);
       setErrorMonth(false);
       setErrorYear(false);
       
       setValueDay('');
       setValueMonths('');
       setValueYear('');


    }
  };

  return (
    <main className="container">
      <section>
        <form className="container_inputs">
          <Inputs
            label="DD"
            title="DAY"
            name="DD"
            min="01"
            max="31"
            placeholder="DD"
            value={valueDay}
            change={(e) => {
              setValueDay(e.target.value);
            }}
          />
          {errorDay === true && (
            <Error text_error="Must be a valid day" style_error="error_day" />
          )}

          <Inputs
            label="MM"
            title="MONTH"
            name="MM"
            min="01"
            max="12"
            placeholder="MM"
            value={valueMonths}
            change={(e) => {
              setValueMonths(e.target.value);
            }}
          />
          {errorMonth === true && (
            <Error
              text_error="Must be a valid month"
              style_error="error_month"
            />
          )}
          <Inputs
            label="YY"
            title="YEAR"
            name="YY"
            minLength="4"
            maxLength="4"
            placeholder="YYYY"
            value={valueYear}
            change={(e) => {
              setValueYear(e.target.value);
            }}
          />

          {errorYear === true && (
            <Error text_error="Must be a valid year" style_error="error_year" />
          )}
          <div>
            <Btn click={handleSubmit} />
          </div>
        </form>
      </section>

      <div className="container_border-botton"> </div>
    
      <section className="result">
        <Result result={year} period="year" />
        <Result result={months} period="months" />
        <Result result={day} period="days" />
        <Result />
      </section>
    </main>
  );
};

export default Container;
