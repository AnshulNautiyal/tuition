import React from "react";

export const FormInput = (props) => {
  const {
    type = "",
    label = "",
    placeholder = "",
    name = "",
    autofocus = false,
    required = true,
    id = "",
  } = props;

  return (
    <div className="inputContainer">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        value=""
        autoFocus={autofocus}
        placeholder={placeholder}
        required={required}
        id={id}
      />
    </div>
  );
};
