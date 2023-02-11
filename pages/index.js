import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import axios from "axios";
import Swal from "sweetalert2";
import { BsArrowRight } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form"
import { PreviewModal } from "../components";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const [values, setValues] = useState(null);
  const [uuid, setUuid] = useState("");
  const [copyText, setCopyText] = useState(true);
  const [showUnique, setShowUnique] = useState(true)
  const [showMsg, setShowMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPresent, setShowPresent] = useState(false);
  const router = useRouter();

  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/${uuid}`
      );

      if (!response.data) {
        Swal.fire({
          icon: "error",
          text: error.response.data.msg,
        });
      }
      setShowUnique(false);
      setShowPresent(true)

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

  // react-hook-form setup

  const formSubmit = async ({ status, present }) => {
    try {
      await axios
        .patch(`${process.env.NEXT_PUBLIC_PRO_URI}/invitation/status/${uuid}`, {
          present: present,
          status: status,
        })

      setShowUnique(false);
      setLoading(true)
      router.push(`/invitation/${uuid}`);

    } catch (error) {
      console.log(error);
    }
  };

  const onChanges = (e) => {
    setValues(e);

  };

  const copy = () => {
    setCopyText(true);
    navigator.clipboard.writeText("e1d4");
    setShowMsg(true);
  };

  // // get Qr-code
  // useEffect(() => {
  //   if (!guest) return;
  //   const fetchQRCode = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/validate/${router.query.uuid}`
  //       );
  //       setQrCode(data.qrCode);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchQRCode();
  // });



  useEffect(() => {
    const timer = setInterval(() => {
      setShowMsg(false);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <>
      <PreviewModal />
      <div className="w-full h-screen bg-goyang absolute top-0 left-0 ">
        <Image
          src="/img/ornamen-2-atas.png"
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
              src="/img/img-cover-woman.png"

              alt=""
              width={250}
              height={150}
              objectFit="contain"
              priority
            />
            <p className="text-md font-[Hattori] tracking-widest">DINDA</p>
          </div>
          <div className="relative border border-l-0 border-t-0 border-zinc-500 box-content  text-center -left-2 ">
            <Image
              src="/img/img-cover-man.png"
              alt=""
              width={250}
              height={150}
              objectFit="contain"
              priority
            />
            <p className="text-MD font-[Hattori] tracking-widest">RAHMADI</p>
          </div>
        </div>
        {showUnique &&

          <form
            onSubmit={SubmitHandler}
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

              <BsArrowRight size={20} />

            </button>
          </form>
        }

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
        <div className={`${showPresent ? "hidden" : "absolute  bottom-4 rounded mb-4 py-2 px-6 bg-zinc-700"}`}>
          <p className="text-zinc-300 text-sm">
            masukkan kode yang dikirimkan dari whatsaapp
          </p>
        </div>
        {showPresent &&
          <form
            onSubmit={handleSubmit(formSubmit)}
            className="w-full sm:w-9/12 md:w-5/6 lg:w-4/6  p-4 flex flex-col items-center justify-center gap-1"
          >
            <div className="w-full leading-relaxed mb-3">
              <h3 className="mb-2 text-lg text-zinc-800">Kehadiran :</h3>
              <div className="flex flex-col flex-nowrap gap-2">
                <div className="flex flex-nowrap gap-1">
                  <input
                    type="radio"
                    value="going"
                    {...register("status", { required: true })}
                    onChange={(e) => onChanges(e.target.value)}
                  />
                  <label className="text-zinc-700">Ya, Akan Hadir</label>
                </div>
                <div className="flex flex-nowrap gap-1">
                  <input
                    type="radio"
                    value="not Going"
                    {...register("status", { required: true })}
                    onChange={(e) => onChanges(e.target.value)}
                  />
                  <label className="text-zinc-700">
                    Maaf, tidak bisa Hadir
                  </label>
                </div>
              </div>
            </div>
            {values === "going" && (
              <div className="mb-3 w-full">
                <h3 className="mb-2 text-lg text-zinc-800">
                  Berapa Orang yang Hadir :
                </h3>
                <input
                  {...register("present", { required: true })}
                  placeholder="0"
                  className="py-3 px-2 w-full outline-none border-none focus:outline-zinc-400 rounded"
                  type="number"
                />
              </div>
            )}

            {values && <button
              className="py-3 px-7 w-full text-white/80 bg-gradient-to-br from-zinc-800/90 to-zinc-900/80   hover:from-zinc-800 hover:to-zinc-900/90 "
              type="submit"
            >
              {loading ? <>
                <div className="flex items-center justify-center gap-2 w-full">
                  <span>Loading...</span>
                  <div className="border-2  p-2  border-zinc-300  bg-clip-border animate-spin rounded-full relative overflow-x-hidden">

                    <span className="absolute top-0 right-0 h-2 w-2  bg-green-400 rounded-full z-10"></span>
                  </div>
                </div>
              </> : <span> Buka Undangan</span>}

            </button>}
          </form>
        }

      </div>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const res = await axios.get(`${process.env.NEXT_PUBLIC_PRO_URI}/invitation`);
//   const invitationDataList = res.data || [];
//   const paths = invitationDataList.length
//     ? invitationDataList.map((guests) => {
//         return {
//           params: {
//             uuid: guests.unique_Code,
//           },
//         };
//       })
//     : [];
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async () => {

//   const res = await axios.get(
//     `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/${uuid}`
//   );
//   const guest = res.data || {};
//   return {
//     props: {
//       guest,
//     },
//   };
// };
