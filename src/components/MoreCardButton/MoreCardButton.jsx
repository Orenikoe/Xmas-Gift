/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from "react";
import "./MoreCardButton.css";
import "primeicons/primeicons.css";

function MoreCardButton({ whenClicked }) {
  return (
    <button
      className="card-backgrounds"
      onClick={() => whenClicked((prevState) => !prevState)}
    >
      <i className="pi pi-list" />
    </button>
  );
}

export default MoreCardButton;
