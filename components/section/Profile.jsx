import React from "react";
import Image from "next/legacy/image";
import bg from "../../public/image/ornamen-profile.png";
import Link from "next/link";
import { SlSocialInstagram } from "react-icons/sl";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center lg:justify-between relative "
      id="profile"
    >
      <div className="absolute w-full top-0 h-full z-20">
        <Image
          src="/image/background-profile.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="w-full relative  flex flex-col items-center justify-center gap-16 h-full py-20 z-30">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col items-center relative w-full"
        >
          <Image
            src="/img/cover-invitation-man.png"
            alt=""
            width={1200}
            height={575}
            objectFit="contain"
            priority
          />
          <div className="w-full bg-image-man -top-14 absolute -left-14 sm:-left-32 md:-left-40 lg:-left-24 -z-10 ">
            <Image
              src={bg}
              alt=""
              width={1200}
              height={575}
              objectFit="contain"
              priority
            />
          </div>
          <div className="flex flex-col gap-2 items-center justify-center px-4">
            <h2 className="font-[Hattori] text-2xl bg-gradient-to-tr from-amber-600 via-yellow-700 bg-clip-text text-transparent">
              RAHMADI IRAWANSYAH
            </h2>
            <p className="text-zinc-600 dark:text-zinc-500 text-sm">
              Putra dari Bpk. Irawan Yusmiatna & Ibu Rosmini
            </p>
            <Link
              href="https://instagram.com/rahmadi.irawansyah"
              target="_blank"
              passHref
              prefetch={false}
            >
              <SlSocialInstagram
                size={22}
                className="text-zinc-700 dark:text-zinc-500 animate-spin hover:animate-none"
              />
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-[parisienne] text-6xl text-amber-700/80"
        >
          &
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative w-full"
        >
          <Image
            src="/img/cover-invitation-woman.png"
            alt=""
            width={1200}
            height={575}
            objectFit="contain"
            priority
          />
          <div className="w-full bg-image-woman -top-14 absolute -left-14 sm:-left-32 md:-left-40 lg:-left-24 -z-10 ">
            <Image
              src={bg}
              alt=""
              width={1200}
              height={575}
              objectFit="contain"
              priority
            />
          </div>
          <div className="flex flex-col gap-2 items-center justify-center px-4">
            <h2 className="font-[Hattori] text-2xl bg-gradient-to-tr from-amber-600 via-yellow-700 bg-clip-text text-transparent">
              DINDA NOVITA SARY
            </h2>
            <p className="text-zinc-600 dark:text-zinc-500 text-center text-sm">
              Putri dari Bpk. Nana Heryana dan Ibu Sri Sumiarti
            </p>
            <Link
              href="https://instagram.com/dindanovitas"
              target="_blank"
              passHref
              prefetch={false}
            >
              <SlSocialInstagram
                className="text-zinc-700 dark:text-zinc-400 animate-spin hover:animate-none"
                size={22}
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
