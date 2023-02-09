import Link from "next/link";
import React, { useState, useEffect } from "react";
import { SlLike } from "react-icons/sl";

const PreviewModal = () => {
  const [isModal, setIsModal] = useState(true);

  const closeModal = () => {
    setIsModal(false);
    return;
  };

  return (
    <>
      {isModal && (
        <div className="w-full h-screen top-0 left-0 fixed bg-black/80 flex flex-col items-center justify-center z-[99999999999999]">
          <div className="w-full lg:w-4/6 shadow-lg shadow-white/20 bg-white/90 p-2 lg:p-8 h-5/6 lg:h-4/6 flex flex-col items-center justify-between rounded-3xl">
            <div className="text-center leading-relaxed pt-3">
              <h1 className="text-zinc-700 text-4xl lg:text-5xl font-[Hattori]">
                Preview Sample
              </h1>
              <p className="pt-3 px-2 text-zinc-500">
                Preview Sample ini kami menggunakan dummy data, mohon maaf bila
                ada kesamaan nama, foto atau tempat.
              </p>
            </div>
            <button
              onClick={closeModal}
              className="flex group items-center gap-2 border-b border-zinc-600 text-zinc-600 hover:text-zinc-900"
            >
              <span>Oke, saya mengerti </span>
              <SlLike className="group-hover:rotate-12" />
            </button>
            <div className="w-full text-zinc-500/80 flex flex-col lg:flex-row text-sm items-center justify-between px-2">
              <h3 className="">
                Powered By :{" "}
                <Link
                  href="https://webhouse.inkara.id"
                  passHref
                  target="_blank"
                  prefetch={false}
                  className="underline"
                >
                  WebHouse.inkara.id
                </Link>{" "}
              </h3>
              <p>©2023 - Ricky Zatnika</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewModal;
