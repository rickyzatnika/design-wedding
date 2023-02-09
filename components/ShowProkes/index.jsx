import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import { SlLike } from "react-icons/sl";

const ShowProtocol = () => {
  const images = [
    {
      id: 1,
      src: "/image/prokes-1.png",
    },
    {
      id: 2,
      src: "/image/prokes-2.png",
    },
    {
      id: 3,
      src: "/image/prokes-3.png",
    },
    {
      id: 4,
      src: "/image/prokes-4.png",
    },
    {
      id: 5,
      src: "/image/prokes-5.png",
    },
  ];

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 5000 adalah waktu dalam milidetik, 5 detik

    return () =>
      clearTimeout(() => {
        timeout;
      }, 500);
  }, []);

  return (
    <>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: -220 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            type: "spring",
          }}
          className="w-full rounded-3xl shadow-xl shadow-black/20 lg:w-[400px] mx-auto fixed h-full lg:h-96  transition-all duration-300 ease-linear top-0 lg:top-10 right-0 lg:right-8  bg-white z-[999999999]"
        >
          <div className=" w-full h-full pb-4 flex flex-col items-center justify-between">
            <div className="text-lg w-full shadow-lg py-2 shadow-black/30 text-zinc-200 bg-zinc-800 text-center ">
              <h1>MOHON UNTUK TETAP MEMATUHI</h1>
              <h2 className="font-[Hattori]">PROTOKOL KESEHATAN</h2>
            </div>
            <div className="grid grid-cols-3 px-3 gap-2 justify-center">
              {images.map((image) => (
                <div key={image.id} className=" w-full h-full col-span-1 ">
                  <Image
                    src={image.src}
                    alt=""
                    width={100}
                    height={100}
                    objectFit="contain"
                    priority
                  />
                </div>
              ))}
            </div>
            <button
              className=" group transition-all duration-100 ease-linear flex items-center gap-1 font-semibold py-1 px-6 text-zinc-100 rounded-full bg-green-500/80  shadow-md shadow-black/20 hover:bg-green-500/90 hover:text-zinc-200"
              onClick={() => setShowPopup(false)}
            >
              <span className="relative">Oke</span>
              <SlLike className="group-hover:animate-bounce " />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ShowProtocol;
