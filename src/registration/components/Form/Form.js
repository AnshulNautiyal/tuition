import React from "react";
import { useState } from "react";

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

  const [userInput, setUserInput] = useState("");

  const handleUserInput = (event) => {
    const { value = "" } = event.target;
    setUserInput(value);
  };

  return (
    <div className="inputContainer">
      <label htmlFor={id}>
        {label}
        <sup>*</sup>
      </label>
      <input
        type={type}
        name={name}
        value={userInput}
        autoFocus={autofocus}
        placeholder={placeholder}
        required={required}
        id={id}
        onChange={handleUserInput}
      />
    </div>
  );
};
