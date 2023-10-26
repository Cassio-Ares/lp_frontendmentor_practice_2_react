import "./Inputs.css";

const Inputs = ({ label, title, name, value, min, max, placeholder }) => {
  return (
    <section className="section_inputs">
      <label htmlFor={label} className="section_inputs-label">{title}</label>
      <input
        type="tel"
        name={name}
        value={value}
        pattern="[0-9]+$"
        minLength={min}
        maxLength={max}
        placeholder={placeholder}
        required
        className="section_inputs-input"
      />
    </section>
  );
};

export default Inputs;
