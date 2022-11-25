/* eslint-disable no-shadow */
import "./Home.css";
import "../components/CardTimer/CardTimer.css";
import React, { useEffect, useState } from "react";
import christmas from "../assets/images/DrawKit Vector Illustration Christmas & Thanksgiving (3).svg";

function Home() {
  const [days, setDays] = useState(10);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(10);
  // const [isLoading, setIsLoading] = useState(true);

  const countdown = () => {
    const endDate = new Date("December 25, 2022 00:00:00").getTime();
    const today = new Date().getTime();
    const timeDiff = endDate - today;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const timeDays = Math.floor(timeDiff / days);
    let timeHours = Math.floor((timeDiff % days) / hours);
    let timeMinutes = Math.floor((timeDiff % hours) / minutes);
    let timeSeconds = Math.floor((timeDiff % minutes) / seconds);

    timeHours = timeHours < 10 ? `0${timeHours}` : timeHours;
    timeMinutes = timeMinutes < 10 ? `0${timeMinutes}` : timeMinutes;
    timeSeconds = timeSeconds < 10 ? `0${timeSeconds}` : timeSeconds;

    setDays(timeDays);
    setHours(timeHours);
    setMinutes(timeMinutes);
    setSeconds(timeSeconds);
    // setIsLoading(false);
  };

  useEffect(() => {
    setInterval(countdown, 1000);
  }, []);

  return (
    <div className="app">
      {/* <div className="img" /> */}
      <div className="Cont-stars">
        <div className="stars" />
      </div>
      <section className="container-background">
        <div className="christmas-img">
          <img src={christmas} alt="christmas" />
        </div>
        <div className="titulo">
          <p>Christmas Countdown Timer</p>
        </div>
        <div className="timer">
          <div className="box">
            <p>{days}</p>
            <h3 className="text">Days</h3>
          </div>
          <div className="box">
            <p>{hours}</p>
            <h3 className="text">Hours</h3>
          </div>
          <div className="box">
            <p>{minutes}</p>
            <h3 className="text">Minutes</h3>
          </div>
          <div className="box">
            <p>{seconds}</p>
            <h3 className="text">Seconds</h3>
          </div>
        </div>
        <div className="button">
          <h3>Hurry ! Get your personalized Christmas Card &#8595;</h3>
          <p>Checkout down below ;)</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
