/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(/src/assets/${props.background}.jpg)` }}
      onClick={() => props.selected(false)}
    >
      <div className="icon-wrap">
        <i className="pi pi-camera" />
      </div>
      <div className="icon-wrap">
        <i className="pi pi-pencil" />
      </div>
    </div>
  );
}

export default Card;
