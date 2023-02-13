/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import ShowProtocol from "../ShowProkes";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

const Gallery = () => {
  return (
    <>
      <div id="gallery" className="w-full min-h-screen py-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center w-full py-4 grid grid-cols-1 leading-relaxed"
        >
          <span className="font-[Hattori]  bg-gradient-to-br from-yellow-500 via-amber-700 to-amber-500 bg-clip-text text-transparent text-xl sm:text-4xl">
            Our <br />
            <span className="font-[timesi] font-semibold">Happiness</span>{" "}
            <br />
            Moments
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-4/6 h-full my-14 mx-auto  py-1 px-6 "
        >
          <video
            loop
            muted
            autoPlay
            className="rounded-xl shadow-xl shadow-black/30 scale-110 md:scale-125 hover:shadow-md transition-all duration-300 ease-linear"
          >
            <source type="video/mp4" src="/video/video.mp4" />
          </video>
        </motion.div>
        <LightGallery
          mode="lg-fade"
          speed={300}
          addClass={true}
          closeOnTap={true}
          isMobile
          elementClassNames="grid grid-cols-2 pt-10 px-4 lg:px-10 gap-1 group "
        >
          <Link href="/img/gallery/gallery-3.jpg">
            <div className="overflow-hidden group">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-3.jpg"
                alt="Jasa Undangan Digital - https://webhouse.inkara.id"
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-6.jpg">
            <div className="overflow-hidden group">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-6.jpg"
                alt="Jasa Undangan Digital - https://webhouse.inkara.id"
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-4-crop.png">
            <div className="overflow-hidden group">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-4-crop.png"
                alt="Jasa Undangan Digital - https://webhouse.inkara.id"
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-5.jpg">
            <div className="overflow-hidden group">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-5.jpg"
                alt="Jasa Undangan Digital - https://webhouse.inkara.id"
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-1.jpg">
            <div className="overflow-hidden group">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-1.jpg"
                alt="Jasa Undangan Digital - https://webhouse.inkara.id"
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-2.jpg">
            <div className="overflow-hidden group">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-2.jpg"
                alt="Jasa Undangan Digital - https://webhouse.inkara.id"
                priority
              />
            </div>
          </Link>
        </LightGallery>
      </div>
      <ShowProtocol />
    </>
  );
};

export default Gallery;
