import React from "react";
import { useEffect } from "react";

export const FormSubmitModal = (props) => {
  return (
    <section className="modal">
      <div className="modal__container">
        <div className="modal__container--image">
          <img
            src="http://media.getsitecontrol.com/prod2/images/3130/a582af5305e3fe719d93fe8c10ad1210_157640964.svg"
            alt="Thank You Image"
          />
        </div>
        <div className="modal__container--header">Yahoo!!! 😊</div>
        <div className="modal__container--subtext">
          Thank you for your registration.
        </div>
        <div className="modal__container--button" onClick={props.closModal}>
          close
        </div>
      </div>
    </section>
  );
};
