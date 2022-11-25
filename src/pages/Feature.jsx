/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react";
import Camera from "../components/Camera/Camera";
import "./Feature.css";
import MoreCardButton from "../components/MoreCardButton/MoreCardButton";
import CardsLibrary from "../components/CardsLibrary/CardsLibrary";
import "primeicons/primeicons.css";
import Snowfall from "react-snowfall";
import Print from "../components/Print/Print";

export default function Feature() {
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [textValue, setTextValue] = useState(null);
  const [photoValue, setphotoValue] = useState(null);
  const [chooseBackground, setChooeseBackground] = useState(null);
  const [removeFinal, setRemoveFinal] = useState(false);
  const [isCompleted, setIsCompleted] = useState(null);

  const removeResults = () => {
    if (isCompleted === true) {
      const response = confirm(
        "Your Card will be lost, Press the button on the bottom to save it as photo"
      );
      if (response === true) {
        setRemoveFinal(true);
        location.reload();
      }
    }
  };

  return (
    <div className="feature-bg">
      <Snowfall style={{ height: "290vh" }} />
      <div className="app-left-side" onClick={() => removeResults()}>
        <div className="more-cards-container">
          <MoreCardButton whenClicked={setIsLibraryOpen} />
          {isLibraryOpen && (
            <div className="cards-arsenal-wrap">
              <CardsLibrary
                selected={setIsLibraryOpen}
                choose={setChooeseBackground}
                choosedBackground={chooseBackground}
              />
            </div>
          )}
        </div>
        <Camera
          photo={setphotoValue}
          whenClick={setIsCompleted}
          text={setTextValue}
          textValue={textValue}
          reset={setIsCompleted}
        />
      </div>
      {!removeFinal && isCompleted && textValue !== null && (
        <div className="final-result">
          <h2 className="card-ready">Your card is ready🎄</h2>
          <Print
            obj={{
              background: chooseBackground,
              photo: photoValue,
              text: textValue,
            }}
          />
        </div>
      )}
    </div>
  );
}
