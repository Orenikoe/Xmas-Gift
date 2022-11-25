/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
import React, { useRef } from "react";
import Hat from "../../assets/hat.png";
import "./Print.css";

const ComponentToPrint = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className="final-card"
    style={{ backgroundImage: `url(/src/assets/${props.obj.background}.jpg)` }}
  >
    <div>
      <img className="final-img" src={props.obj.photo} alt="charactar" />
    </div>
    <div className="card-text">{props.obj.text}</div>
  </div>
));

function Print({ obj }) {
  const componentRef = useRef();

  return (
    <>
      <ComponentToPrint obj={obj} ref={componentRef} />
      <button
        className="export-button"
        onClick={() => {
          exportComponentAsJPEG(componentRef);
        }}
      >
        Export as JPEG
        <img className="christmas-hat" src={Hat} alt="christmas-hat" />
      </button>
      {/* <button
        className="export-button"
        onClick={() => exportComponentAsPDF(componentRef)}
      >
        Export as PDF
        <img className="christmas-hat" src={Hat} alt="christmas-hat" />
      </button> */}
      <button
        className="export-button"
        onClick={() => {
          exportComponentAsPNG(componentRef);
        }}
      >
        Export as PNG
        <img className="christmas-hat" src={Hat} alt="christmas-hat" />
      </button>
    </>
  );
}

export default Print;
