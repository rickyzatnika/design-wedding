import React from "react";
import Image from "next/legacy/image";
import bg from "../../public/image/ornamen-profile.png";
import Link from "next/link";
import {SlSocialInstagram} from "react-icons/sl"

const Profile = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center lg:justify-between relative "
      id="profile"
    >
      <div className="absolute w-full top-0 h-full z-40">
        <Image
          src="/image/background-profile.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="w-full relative  flex flex-col items-center justify-center gap-16 h-full py-20 z-50">
        <div className="flex flex-col items-center relative w-full">
          <Image
            src="/image/man-profile.png"
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
              AGOES KOPAJA
            </h2>
            <p className="text-zinc-600 text-sm">
              Putra dari Bpk. M.Indra Tajudin & Ibu Tika Pratiwi{" "}
            </p>
            <Link href="https://instagram.com/webhouse_invitation" target="_blank" passHref prefetch={false}><SlSocialInstagram size={22} className="hover:rotate-12" /></Link>
          </div>
        </div>
        <div className="font-[parisienne] text-6xl text-amber-700/80">&</div>
        <div className="relative w-full">
          <Image
            src="/image/woman-profile.png"
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
              REIKA KOBUTRI
            </h2>
            <p className="text-zinc-600">
              Putra dari Bpk. M.Indra Tajudin & Ibu Tika Pratiwi{" "}
            </p>
            <Link href="https://instagram.com/webhouse_invitation" target="_blank" passHref prefetch={false}><SlSocialInstagram className="hover:rotate-12" size={22} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
