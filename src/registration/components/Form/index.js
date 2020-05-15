import React from "react";
import formJson from "./Form.json";
import { FormInput } from "./Form";
import firebase from 'firebase';
import moment from 'moment';

export class FormParent extends React.Component {
  constructor() {
    super();
    this.formTag = React.createRef();
    this.state = {};
  }

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

  getFormData = () => {
    const FORM_NODE = this.formTag.current;
    const formData = new FormData(FORM_NODE);
    const formObject = {};
    for (let eachFormItem of formData) {
      formObject[eachFormItem[0]] = eachFormItem[1];
    }
    return {
      ...formObject,
      registrationDate:`${moment()}`
    }
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const finalFormObject = this.getFormData();
    const registeredStudent = firebase.database().ref('students-registered');
    registeredStudent.push(finalFormObject);

  };

  render() {
    const formInput = this._renderFormInput();
    return (
      <main className="registrationForm">
        <div className="formContainer">
          <form
            autoComplete="off"
            method="post"
            id="tuition-form"
            ref={this.formTag}
            onSubmit={this.handleFormSubmit}
          >
            {formInput}
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </main>
    );
  }
}
