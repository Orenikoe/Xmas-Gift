/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from "react";
import "./FinalCard.css";

function FinalCard(props) {
  return (
    <div
      className="final-card"
      style={{ backgroundImage: `url(${props.obj.background})` }}
    >
      <div>
        <img className="final-img" src={props.obj.photo} alt="charactar" />
      </div>
      <div className="icon-wrap">{props.obj.text}</div>
    </div>
  );
}

export default FinalCard;
