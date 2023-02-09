import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import axios from "axios";
import Swal from "sweetalert2";
import { BsArrowRight } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { motion } from "framer-motion";

export default function Home() {
  const [uuid, setUuid] = useState("");
  const [copyText, setCopyText] = useState(true);
  const [showMsg, setShowMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/${uuid}`
      );
      if (response.data) {
        router.push(`/${uuid}`);
      }
      setLoading(true);
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: "error",
          text: error.response.data.msg,
        });
      }
    }
  };
  const handleChange = (e) => {
    setUuid(e.target.value);
  };

  const copy = () => {
    setCopyText(true);
    navigator.clipboard.writeText("13b2");
    setShowMsg(true);
  };

  return (
    <>
      <div className="w-full h-screen  absolute top-0 left-0 ">
        <Image
          src="/image/orn-2-top-right.png"
          alt=""
          layout="responsive"
          width={100}
          height={75}
          objectFit="cover"
          objectPosition="bottom"
          priority
        />
      </div>
      <div className="w-full h-screen pt-40 pb-0 z-50 relative flex flex-col gap-1 lg:gap-20 items-center justify-evenly">
        <div className="flex w-fit items-center justify-center">
          <div className="border border-r-0 border-b-0 border-zinc-500 box-content  relative left-2 text-center">
            <Image
              src="/image/man-1.png"
              alt=""
              width={150}
              height={100}
              objectFit="contain"
              priority
            />
            <p className="text-xs font-[TimesNewRomance]">AGOES</p>
          </div>
          <div className="relative border border-l-0 border-t-0 border-zinc-500 box-content  text-center -left-2 top-12">
            <Image
              src="/image/woman-1.png"
              alt=""
              width={150}
              height={100}
              objectFit="contain"
              priority
            />
            <p className="text-xs font-[TimesNewRomance]">REIKA</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex relative z-50 w-full px-4 sm:w-3/6 md:w-4/6 lg:w-4/6 lg:px-0"
        >
          <input
            type="text"
            name="uuid"
            value={uuid}
            onChange={handleChange}
            required
            placeholder="masukkan kode"
            className="py-2 px-5 w-full bg-zinc-200/80  outline-none text-md text-zinc-800  placeholder:text-zinc-700"
          />
          <button
            className="text-white bg-zinc-900 px-2 hover:bg-black rounded-tr-xl"
            type="submit"
          >
            {loading ? (
              <div className="border-2 p-2 border-zinc-300  bg-clip-border animate-spin rounded-full relative overflow-x-hidden">
                <span className="absolute top-0 right-0 h-2 w-2  bg-green-400 rounded-full z-10"></span>
              </div>
            ) : (
              <BsArrowRight size={20} />
            )}
          </button>
        </form>
        {showMsg && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex absolute bottom-10 pb-4 items-center justify-center gap-1"
          >
            <p className="">Berhasil disalin</p>
            <FcCheckmark />
          </motion.div>
        )}
        <div className="absolute bottom-0 mb-4 py-2 px-6 bg-zinc-700">
          <p className="text-zinc-300 text-sm">
            masukkan kode ini :{" "}
            <span
              className="border-b cursor-pointer border-zinc-400"
              onClick={copy}
            >
              13b2
            </span>{" "}
            untuk melihat preview
          </p>
        </div>
      </div>
    </>
  );
}
