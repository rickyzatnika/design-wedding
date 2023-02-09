import React from "react";
import Image from "next/legacy/image";
import bg from "../../public/image/ornamen-profile.png";

const Profile = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center lg:justify-between relative "
      id="profile"
    >
      <div className="absolute w-full top-0 h-full -z-5">
        <Image
          src="/image/background-profile.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="w-full relative flex flex-col items-center justify-center gap-16 h-full py-20 z-10">
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
          <div className="text-center px-4">
            <h2 className="text-zinc-700 font-[Hattori] text-xl">
              AGOES KOPAJA
            </h2>
            <p className="text-zinc-600">
              Putra dari Bpk. M.Indra Tajudin & Ibu Tika Pratiwi{" "}
            </p>
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
          <div className="text-center px-4">
            <h2 className="text-zinc-700 font-[Hattori] text-xl">
              REIKA KOBUTRI
            </h2>
            <p className="text-zinc-600">
              Putra dari Bpk. M.Indra Tajudin & Ibu Tika Pratiwi{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
