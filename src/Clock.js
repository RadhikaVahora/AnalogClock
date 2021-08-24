import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  const [hours, setClockHours] = useState("");
  const [minutes, setClockMinutes] = useState("");
  const [seconds, setClockSeconds] = useState("");

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  useEffect(() => {
    setInterval(getClockParameters, 1000);
    //getClockParameters();
  }, [hours, minutes, seconds]);

  const getClockParameters = () => {
    const date = new Date();
    const dateHours = formatTime(date.getHours());
    const dateMinutes = formatTime(date.getMinutes());
    const dateSeconds = formatTime(date.getSeconds());
    setClockHours(dateHours);
    setClockMinutes(dateMinutes);
    setClockSeconds(dateSeconds);
  };

  const secondsStyle = {
    transform: `rotate(${seconds * 6}deg)`,
  };
  const minutesStyle = {
    transform: `rotate(${minutes * 6}deg)`,
  };
  const hoursStyle = {
    transform: `rotate(${hours * 30}deg)`,
  };
  console.log(secondsStyle, minutesStyle, hoursStyle);
  return (
    <div>
      <h2>Analog Clock</h2>
      <div className={"clock"}>
        <div className={"seconds"} style={secondsStyle} />
        <div className={"minutes"} style={minutesStyle} />
        <div className={"hours"} style={hoursStyle} />
        <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
      </div>
      <div className={"digital-clock"}>
        <h2>Digital Clock</h2>
        <div>
          {hours}:{minutes}:{seconds}
        </div>
      </div>
    </div>
  );
};

export default Clock;
