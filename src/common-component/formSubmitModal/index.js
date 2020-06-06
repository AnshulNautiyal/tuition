import React from "react";
import { FormSubmitModal } from "./FormSubmitModal";
import { auth } from "firebase";

export class FormSubmitModalParent extends React.PureComponent {
  constructor() {
    super();
    this.modalNode = React.createRef();
  }

  closModal = () => {
    this.modalNode.current.style.display = "none";
    document.body.style.overflow = "auto";
  };
  render() {
    return (
      <section className="modal-section" ref={this.modalNode} id="modal">
        <FormSubmitModal closModal={this.closModal} />
      </section>
    );
  }
}
