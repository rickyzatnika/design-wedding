import React from "react";
import CountDown from "../countdownTimer";

const Event = () => {
  return (
    <div className="w-full h-screen" id="event">
      Event
      <div className="w-full px-2">
        <CountDown />
      </div>
    </div>
  );
};

export default Event;
