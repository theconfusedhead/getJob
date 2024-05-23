import React from "react";

const FormRow = ({ type, name, labelText, handleChange, value }) => {
  return (
    <div>
      <label>{name}: </label>
      <input type={type} name={name} onChange={handleChange} value={value} />
    </div>
  );
};

export default FormRow;
