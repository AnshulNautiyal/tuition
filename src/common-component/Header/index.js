import React from "react";
import { Header } from "./Header";

export class HeaderParent extends React.Component {
  render() {
    return (
      <header className="header">
        <Header />
      </header>
    );
  }
}
