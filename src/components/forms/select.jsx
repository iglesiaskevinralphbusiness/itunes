import React from "react";

const Select = ({ options, name, label, pageSize, onChange }) => {
  return (
    <div className="form-group">
      <select id={name} name={name} value={pageSize} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
