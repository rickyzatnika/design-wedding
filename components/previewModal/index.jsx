import Link from "next/link";
import React, { useState, useEffect } from "react";
import { SlLike } from "react-icons/sl";
import { ImWarning } from "react-icons/im";

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
          <div className="w-full lg:w-4/6 shadow-lg shadow-white/20 bg-white/90 p-2 lg:p-8 h-full lg:h-4/6 flex flex-col items-center justify-between rounded-3xl">
            <div className="text-center leading-relaxed pt-3">
              <div className="w-full flex flex-col text-4xl items-center gap-2 justify-center">
                <ImWarning size={30} className="text-orange-500 " />
                <h1 className="text-zinc-700 tracking-widest lg:text-4xl font-[Hattori]">
                  PERHATIAN
                </h1>
              </div>
            </div>
            <div className="w-full px-5  lg:px-10 flex flex-col gap-2 justify-around">
              <ol className="list-decimal list-inside leading-loose">
                <li className="text-zinc-700">
                  Salin dan Tempelkan Kode Undangan yang Anda dapat dari
                  Whatsapp pada form input.
                </li>
                <li className="text-zinc-700">
                  Jika kode undangan tidak dapat diakses, mohon untuk konfirmasi
                  kepada pengirim link undangan.
                </li>
                <li className="text-zinc-700">
                  Jangan lupa untuk klik Ambil dan Screenshot QR-Code yang ada
                  di halaman undangan. <br /> Simpan dan tunjukan kepada
                  penerima tamu saat memasuki acara.
                </li>
                <li className="text-zinc-700">
                  Jika lupa, bisa kembali dan ulangi proses dari awal atau
                  refresh browser anda.
                </li>
              </ol>
              <p className="italic text-center py-10 text-zinc-600">
                Kami Ucapkan Terima Kasih Atas Perhatiannya
              </p>
            </div>
            <button
              onClick={closeModal}
              className="flex group items-center gap-2 border-b border-zinc-600 text-zinc-600 hover:text-zinc-900"
            >
              <span>Oke, saya mengerti </span>
              <SlLike className=" gerak relative" />
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
              <p>©2023 - @webhouse_invitation</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewModal;
