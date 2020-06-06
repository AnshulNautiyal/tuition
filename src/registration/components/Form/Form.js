import React from "react";
import { useState, useEffect, useRef } from "react";

export const FormInput = (props) => {
  const {
    type = "",
    label = "",
    placeholder = "",
    name = "",
    autofocus = false,
    required = true,
    id = "",
    reset = false,
  } = props;
  const dropDown = useRef();

  const [userInput, setUserInput] = useState("");

  const handleUserInput = (event) => {
    const { value = "" } = event.target;
    setUserInput(value);
  };
  useEffect(() => {
    setUserInput("");
  }, [reset]);

  const handleDropDown = () => {
    dropDown.current.style.display = "block";
  };
  const selectClass = (standard) => () => {
    dropDown.current.style.display = "none";
    document.getElementById("form_class").value = standard;
  };

  const createFormDom = () => {
    const {
      type = "",
      label = "",
      placeholder = "",
      name = "",
      autofocus = false,
      required = true,
      id = "",
      reset = false,
    } = props;

    if (type === "dropDown") {
      return (
        <div className="dropDown">
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
          <div className="hidden" onClick={handleDropDown}></div>
          <div className="list" ref={dropDown}>
            <div onClick={selectClass("9th")}>9th</div>
            <div onClick={selectClass("10th")}>10th</div>
            <div onClick={selectClass("11th")}>11th</div>
            <div onClick={selectClass("12th")}>12th</div>
          </div>
        </div>
      );
    } else {
      return (
        <>
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
        </>
      );
    }
  };

  return <div className="inputContainer">{createFormDom()}</div>;
};
