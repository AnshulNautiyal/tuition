import React from "react";
import { useEffect } from "react";

export const Loader = () => {

  return (
    <section className="loader" id="loader">
      <div className="loader__border">
          <div className="loader__content">
              LOADING<span>...</span>
          </div>
      </div>
    </section>
  );
};
