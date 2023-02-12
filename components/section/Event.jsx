import React, { useState, useEffect, useRef } from "react";
import CountDown from "../countdownTimer";
import Image from "next/legacy/image";
import { MdOutlineQrCode2 } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";
import { motion } from "framer-motion";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import GetQrCode from "../GetQRCode";
import Link from "next/link";

const Event = ({ guest }) => {
  const sectionRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [displayed, setDisplayed] = useState(false);

  const [showQrCode, setShowQrCode] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !displayed) {
          setShowModal(true);
          setDisplayed(true);
        }
      });
    });
    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [displayed]);

  const handleQrCode = () => {
    setShowQrCode(true);
    setShowModal(false);
  };

  return (
    <div ref={sectionRef} className="w-full min-h-screen relative" id="event">
      {showQrCode && <GetQrCode setShowQrCode={setShowQrCode} />}
      <div className="absolute w-full top-0 h-full z-30">
        <Image
          src="/image/background-profile.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="w-full min-h-screen flex flex-col items-center justify-around relative z-40">
        <h1 className="text-4xl bg-gradient-to-tr from-amber-600 via-yellow-700 to-transparent bg-clip-text text-transparent font-[parisienne] ">
          Save The Date
        </h1>
        <div className="w-full px-2">
          <CountDown />
        </div>
        <div className="flex flex-col gap-6 items-center justify-center">
          <AddToCalendarButton
            name="The Wedding Rahmadi & Dinda"
            options="'Google'"
            location="Aula Gupusmu GSG Gatot.SP"
            startDate="2023-7-2"
            startTime="10:15"
            endTime="14:20"
            buttonStyle="date"
            timeZone="Asia/Jakarta"
            label=" add to calendar"
            trigger="click"
          ></AddToCalendarButton>
          <Link
            href="https://goo.gl/maps/25iiaK6raSq3JefF9"
            target="_blank"
            prefetch={false}
            passHref
            className="text-black py-2 px-5 text-sm flex items-center gap-2 bg-zinc-200 shadow-lg shadow-black/20 rounded "
          >
            <TbMapSearch size={20} className="text-zinc-600/80" />
            OPEN MAPS
          </Link>
        </div>
      </div>

      {showModal && (
        <>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className={`fixed overflow-hidden top-40 right-0 shadow-lg shadow-black/20 rounded-tl-xl rounded-bl-xl w-60 lg:w-80 h-auto py-8 lg:py-6 flex items-center z-50 justify-center bg-zinc-50 transition-all duration-500 ease-linear
                ${
                  showModal
                    ? " right-0 "
                    : " -right-[100%] transition-all duration-500 ease-linear"
                }`}
          >
            <div className="text-center">
              <div className="py-2 antialiased">
                <h1 className="text-zinc-800">Hallo, {guest.name}</h1>
                <p className="text-sm px-3 text-zinc-700/70">
                  Jangan lupa untuk Screenshot QR-Code dan tunjukkan pada
                  penerima tamu saat memasuki acara.
                </p>
              </div>
              <div className="flex py-1 items-center shadow-md shadow-black/30 w-fit mx-auto px-4 rounded justify-center gap-1 bg-zinc-800">
                <MdOutlineQrCode2 size={28} className="text-zinc-300" />
                <button
                  className="text-zinc-300 text-sm"
                  onClick={() => handleQrCode()}
                >
                  Ambil QR-Code
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Event;
