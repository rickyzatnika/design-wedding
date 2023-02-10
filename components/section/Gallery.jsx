/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/legacy/image";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { motion } from "framer-motion";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

const Gallery = () => {
  return (
    <>
      <div id="gallery" className="w-full min-h-screen py-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
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
        <LightGallery
          mode="lg-fade"
          speed={300}
          plugins={[lgThumbnail, lgZoom]}
          addClass={true}
          isMobile
          elementClassNames="grid grid-cols-2 pt-10 px-4 lg:px-10 gap-1 group "
        >
          <Link href="/image/cover-header.jpg">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hover:scale-105 shadow-lg shadow-black/10 "
            >
              <Image
                className="img-responsive rounded"
                src="/image/cover-header.jpg"
                alt="Jasa Undangan Digital - ryza.inkara.id"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </motion.div>
          </Link>
          <Link href="/image/cover-home.jpg">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Image
                className="img-responsive rounded"
                src="/image/cover-home.jpg"
                alt="Jasa Undangan Digital - ryza.inkara.id"
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </motion.div>
          </Link>
          <Link href="/image/cover-home-2.jpg">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Image
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded"
                src="/image/cover-home-2.jpg"
                alt="Jasa Undangan Digital - ryza.inkara.id"
                priority
              />
            </motion.div>
          </Link>
          <Link href="/image/cover-home-3.jpg">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Image
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded"
                src="/image/cover-home-3.jpg"
                alt="Jasa Undangan Digital - ryza.inkara.id"
                priority
              />
            </motion.div>
          </Link>
          <Link href="/image/cover-home-3.jpg">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Image
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded"
                src="/image/cover-home-3.jpg"
                alt="Jasa Undangan Digital - ryza.inkara.id"
                priority
              />
            </motion.div>
          </Link>
          <Link href="/image/cover-home-3.jpg">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Image
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded"
                src="/image/cover-home-2.jpg"
                alt="Jasa Undangan Digital - ryza.inkara.id"
                priority
              />
            </motion.div>
          </Link>
        </LightGallery>
      </div>
    </>
  );
};

export default Gallery;
