import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import { BiMap } from "react-icons/bi";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const GetQrCode = ({ setShowQrCode }) => {
  const [qrCode, setQrCode] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchQRCode = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/validate/${router.query.uuid}`
        );
        setQrCode(data.qrCode);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQRCode();
  });

  const closeQrCode = () => {
    setShowQrCode(false);
  };

  return (
    <>
      <div className="w-full lg:w-2/6 h-screen fixed backdrop-blur z-[999999999] top-0 right-0 flex flex-col justify-center items-center ">
        <div className="antialiased w-full   bg-gradient-to-tr  from-white/60 to-transparent h-full flex flex-col items-center justify-evenly ">
          <div className="w-full relative h-full flex flex-col items-center justify-evenly bg-zinc-200 leading-loose text-center">
            <div className="pb-5 py-10 flex w-full flex-col text-zinc-600 gap-2 items-center">
              <p className="font-[Hattori] tracking-widest">The Wedding Of</p>
              <p className="font-[parisienne] text-3xl font-semibold text-amber-600">
                Agoes & Reika
              </p>
              <span>Senin, 20 November 2023</span>
              <div className="w-full text-center">
                {qrCode && !qrCode ? (
                  <p>Loading....</p>
                ) : (
                  <Image
                    src={qrCode}
                    alt="qr-code"
                    width={75}
                    height={50}
                    objectFit="contain"
                    layout="responsive"
                    priority
                  />
                )}
                <div className="flex flex-col items-center pt-3">
                  <BiMap size={28} className="text-zinc-900/80" />
                  <p className="text-zinc-900/80 antialiased font-[Hattori] ">
                    Intercontinental Bandung Dago Pakar
                  </p>
                </div>
              </div>
            </div>
            <button
              className="text-zinc-500 py-1 px-5 border-b border-zinc-400  rounded-full"
              onClick={closeQrCode}
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetQrCode;
