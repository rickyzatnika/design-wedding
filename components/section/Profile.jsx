import React from "react";
import Image from "next/legacy/image";

const Profile = () => {
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-between relative "
      id="profile"
    >
      <div className="absolute w-full top-0 h-full -z-5">
        <Image
          src="/image/background-profile.png"
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-between h-full py-10 z-10">
        <h1>Assalamu`alaikum Wr Wb</h1>
        <div className="w-fit relative  ">
          <Image
            src="/image/man-profile.png"
            alt=""
            width={1200}
            height={575}
            objectFit="contain"
            className="img-profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
