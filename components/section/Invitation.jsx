import React from "react";
import Image from "next/legacy/image";

const Invitation = ({ guest }) => {
  return (
    <div id="profile" className="w-full flex items-center flex-col py-8 justify-evenly min-h-screen bg-gradient-to-bl from-[#212121] to-black relative">
      <div className="w-full bg-invitation absolute -rotate-45 mix-blend-screen left-44 sm:left-60 md:left-96 lg:left-40 top-0">
        <Image src="/image/ornamen-profile.png" width={50} height={25} alt="" objectFit="contain" layout="responsive" priority/>
      </div>
      <div className="text-center p-4 lg:p-8 relative z-20">
        <h1 className="text-zinc-100 mb-2 text-4xl font-[Hattori]">
          Assalamu`alaikum Wr.Wb
        </h1>
        <p className="text-zinc-300 text-sm leading-relaxed">Dengan menyebut nama Allah SWT yang Maha Pengasih dan Maha Penyayang, kami dengan senang hati ingin mengundang Bapak/Ibu, Saudara/i,  {guest.name} dan berbagi kegembiraan pada pernikahan kami.</p>
      </div>
      
      <div className="w-full flex flex-nowrap items-center justify-around">
        <div className="w-fit text-center flex flex-col items-center gap-2  py-2 leading-relaxed">
          <h3 className="text-zinc-200 text-md sm:text-xl uppercase">Akad Nikah</h3>
          <div className="w-fit flex items-center justify-center mix-blend-screen brightness-50">
            <Image src="/image/ornamen-cincin.png" alt="" width={100} height={75} objectFit="contain" priority />
          </div>
          <p className="text-zinc-300 text-sm">Pukul 07.30 WIB - Selesai</p>
        </div>
        <div className="w-fit text-center flex flex-col items-center gap-2 py-2 leading-relaxed">
          <h3 className="text-zinc-200 text-md sm:text-xl uppercase">Resepsi</h3>
          <div className="w-fit flex items-center justify-center mix-blend-screen brightness-50">
            <Image src="/image/ornamen-cheers.png" alt="" width={100} height={75} objectFit="contain" priority />
          </div>
          <p className="text-zinc-300 text-sm">Pukul 10.15 WIB - Selesai</p>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
