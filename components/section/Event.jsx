import React from "react";
import CountDown from "../countdownTimer";

import { AddToCalendarButton } from 'add-to-calendar-button-react';



const Event = () => {
  

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-around " id="event">
      <h1 className="text-4xl text-zinc-800">Save The Date</h1>
      <div className="w-full px-2">
        <CountDown />
      </div>
      <AddToCalendarButton 
        name="The Wedding Agoes & Reika"
        options="'Google'"
        location="Intercontinental Bandung Dago Pakar"
        startDate="2023-11-20"
        startTime="10:15"
        endTime="15:30"
        buttonStyle="date"
        timeZone="Asia/Jakarta"
        label=" add to calendar"
        trigger="click"
      >
       
      </AddToCalendarButton>
    </div>  
  );
};

export default Event;
