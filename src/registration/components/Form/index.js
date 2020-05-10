import React from "react";
import formJson from "./Form.json";
import { FormInput } from "./Form";

export class FormParent extends React.Component {
  _renderFormInput = () => {
    return formJson.map((item) => {
      const {
        uid = "",
        type = "",
        label = "",
        placeholder = "",
        name = "",
        autofocus = false,
        required = true,
        id = "",
      } = item;
      return (
        <FormInput
          key={uid}
          type={type}
          label={label}
          placeholder={placeholder}
          name={name}
          autofocus={autofocus}
          required={required}
          id={id}
        />
      );
    });
  };
  render() {
    const formInput = this._renderFormInput();
    return (
      <main className="registrationForm">
        <div className="formContainer">
          <form autoComplete="off" method="post" id="tuition-form">
            {formInput}
            <button>SUBMIT</button>
          </form>
        </div>
      </main>
    );
  }
}
