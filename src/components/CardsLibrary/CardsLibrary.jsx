/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from "react";
import Card from "../Card/Card";
import "./CardsLibrary.css";

function CardsLibrary({ choose, choosedBackground, selected }) {
  const backgroundsArr = [1, 2, 3, 4, 5, 6];

  return (
    <div className="cards-library">
      {backgroundsArr.map((background, index) => {
        return (
          <div
            className={
              choosedBackground === background
                ? "chosed-background"
                : "not-chosed"
            }
            onClick={() => choose(background)}
          >
            {" "}
            <Card id={index + 1} background={background} selected={selected} />
          </div>
        );
      })}
    </div>
  );
}

export default CardsLibrary;
