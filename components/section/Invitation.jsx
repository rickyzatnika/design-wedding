import React from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

const Invitation = ({ guest }) => {
  return (
    <div
      id="profile"
      className="w-full flex items-center flex-col py-8 justify-evenly min-h-screen bg-gradient-to-bl from-[#212121] to-black relative"
    >
      <div className="w-full bg-invitation absolute -rotate-45 mix-blend-screen left-44 sm:left-60 md:left-96 lg:left-40 top-0">
        <Image
          src="/image/ornamen-profile.png"
          width={50}
          height={25}
          alt=""
          objectFit="contain"
          layout="responsive"
          priority
        />
      </div>
      <div className="text-center p-4 lg:p-8 relative z-20">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-zinc-100 mb-2 text-4xl font-[Hattori]"
        >
          Assalamu`alaikum Wr.Wb
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-zinc-400 text-sm leading-relaxed"
        >
          Dengan menyebut nama Allah SWT yang Maha Pengasih dan Maha Penyayang,
          kami dengan senang hati ingin mengundang Bapak/Ibu, Saudara/i,{" "}
          {guest.name} dan berbagi kegembiraan pada pernikahan kami yang Insya
          Allah akan dilaksanakan,
        </motion.p>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="flex flex-col leading-relaxed justify-center text-center gap-2 items-center"
      >
        <span className="text-zinc-400 italic">Pada Tanggal :</span>
        <span className="text-4xl bg-gradient-to-tr from-amber-400 via-yellow-600 to-amber-400 bg-clip-text text-transparent font-[parisienne]">
          02 Juli 2023
        </span>
        <div className="py-4 leading-relaxed">
          <p className="text-zinc-400 italic">Tempat :</p>
          <p className="bg-gradient-to-tr flex text-xl flex-col items-center gap-4 from-amber-600/70 via-yellow-600/70 to-amber-500/70 bg-clip-text text-transparent">
            Aula Gupusmu GSG Gatot.SP <br />
            <span className="px-6 leading-relaxed text-sm">
              Jl. Cikutra No.201, Neglasari, Kec. Cibeunying Kaler, Kota
              Bandung, Jawa Barat 40124
            </span>
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="w-full flex flex-nowrap items-center justify-around"
      >
        <div className="w-fit text-center flex flex-col items-center gap-2  py-2 leading-relaxed">
          <h3 className="text-zinc-400 text-md sm:text-xl font-[Hattori]">
            Akad Nikah
          </h3>
          <div className="w-fit flex items-center justify-center mix-blend-screen brightness-75">
            <Image
              src="/image/ornamen-cincin.png"
              alt=""
              width={100}
              height={75}
              objectFit="contain"
              priority
            />
          </div>
          <p className="text-zinc-500/80 text-sm leading-loose">
            {" "}
            Pukul 08.00 WIB <br /> s/d <br /> Selesai
          </p>
        </div>
        <div className="w-fit text-center flex flex-col items-center gap-2 py-2 leading-relaxed">
          <h3 className="text-zinc-400 text-md sm:text-xl font-[Hattori]">
            Resepsi
          </h3>
          <div className="w-fit flex items-center justify-center mix-blend-screen brightness-75">
            <Image
              src="/image/ornamen-cheers.png"
              alt=""
              width={100}
              height={75}
              objectFit="contain"
              priority
            />
          </div>
          <p className="text-zinc-500/80 text-sm leading-loose">
            Pukul 10.00 WIB <br /> s/d <br /> Pukul 14.20 WIB
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Invitation;
