import "./Inputs.css";

const Inputs = ({ label, title, name, value, min, max, placeholder, change}) => {

  


  return (
    <section className="section_inputs">
      <label htmlFor={label} className="section_inputs-label">{title}</label>
      <input
        type="tel"
        name={name}
        value={value}
        placeholder={placeholder}
        min={min}
        max={max}
        required
        className="section_inputs-input"
        onChange={change}
      />
    </section>
  );
};

export default Inputs;
