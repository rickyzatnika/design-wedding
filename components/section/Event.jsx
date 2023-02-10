import React from "react";
import CountDown from "../countdownTimer";
import Image from "next/legacy/image";

import { AddToCalendarButton } from "add-to-calendar-button-react";

const Event = () => {
  return (
    <div className="w-full min-h-screen relative" id="event">
      <div className="absolute w-full top-0 h-full z-40">
        <Image
          src="/image/background-profile.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="w-full min-h-screen flex flex-col items-center justify-around relative z-50">
        <h1 className="text-4xl bg-gradient-to-tr from-amber-600 via-yellow-700 to-transparent bg-clip-text text-transparent font-[parisienne] ">
          Save The Date
        </h1>
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
        ></AddToCalendarButton>
      </div>
    </div>
  );
};

export default Event;
