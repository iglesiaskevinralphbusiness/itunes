import React from "react";

import Input from "./input";
import Select from "./select";

import Joi from "joi-browser";

class Form extends React.Component {
  handleChange = ({ currentTarget: input }) => {
    const value = input.value;
    const name = input.name;
    this.props.onFormChange(name, value);
  };

  renderInput = (name, label, type, value, placeholder) => {
    return (
      <Input
        name={name}
        label={label}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={this.handleChange}
      />
    );
  };

  renderSelect = (options, name, label, pageSize) => {
    return (
      <Select
        options={options}
        name={name}
        label={label}
        pageSize={pageSize}
        onChange={this.handleChange}
      />
    );
  };
}

export default Form;
