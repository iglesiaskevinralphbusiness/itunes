import React from "react";

const Input = ({ name, label, type, value, placeholder, onChange }) => {
  return (
    <div className="form-group">
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
};

export default Input;
