import React, { useState } from "react";
import Image from "next/legacy/image";
import Canvas from "../canvas/Canvas";
import Link from "next/link";
import Sound from "../Backsound";
import { images } from "../MyImage";
import Navbar from "../Navbar";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Aside = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1300,
    autoplaySpeed: 800,
    fade: true,
    slidesToShow: 1,
    slideToScroll: 1,
    afterChange: (current) => setActiveIndex(current),
  };

  return (
    <>
      <Sound />
      <div className="w-[80%] overflow-hidden mx-auto h-screen hidden lg:flex items-center justify-center relative  ">
        <Navbar />
        <div className="fixed  z-[999999] flex items-center rounded-full justify-center top-0 py-2 px-7 mt-2 shadow-md shadow-zinc-900/30 bg-white/80 backdrop-blur w-fit">
          <Link href="/" passHref className="text-zinc-900">
            Undangan Pernikahan
          </Link>
        </div>
        <Canvas />
        <div className="w-full min-h-screen  -z-50  top-0 left-0 right-0 bottom-0 fixed">
          <Slick {...settings}>
            {images.map((img) => (
              <Image
                key={img.id}
                src={`${img.src}`}
                alt=""
                width={975}
                height={975}
                objectFit="cover"
                placeholder="blur"
                blurDataURL={img.src}
              />
            ))}
          </Slick>
        </div>
        <div className="fixed -z-40 top-0 left-0 right-0 w-full h-screen bg-gradient-to-t from-black to-transparent" />
        <div className="text-center fixed flex flex-col gap-5">
          <h1 className="text-8xl font-[parisienne] text-zinc-200">Rahmadi</h1>
          <span className="text-4xl text-zinc-300 font-[timesi]">&</span>
          <h1 className="text-8xl font-[parisienne] text-zinc-200">Dinda</h1>
        </div>
        <div className=" w-fit flex items-center justify-between gap-2 fixed bottom-12 py-2 px-6  text-white">
          <span className="font-[Hattori] tracking-widest text-zinc-200">
            10 JUNI 2023
          </span>
          <span className="w-2 h-2 rounded-full animate-ping bg-green-500/80 backdrop-blur"></span>
        </div>
      </div>
    </>
  );
};

export default Aside;
