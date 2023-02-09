import { motion } from "framer-motion";
import { ImPushpin } from "react-icons/im";
import { useState, useEffect } from "react";
import axios from "axios";
import CommentForm from "../commentForm";

const GetComment = ({ guest }) => {
  const [posts, setPosts] = useState([]);

  const getComment = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_PRO_GET}/api/getComment`
    );
    const post = await response.data;
    setPosts(post);
  };

  useEffect(() => {
    getComment();
  }, []);

  return (
    <>
      <div className="container w-full mb-8 px-2 lg:px-8">
        <div className="py-12 text-zinc-200/80 text-center bg-[#242424] ">
          <motion.h3
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-2xl sm:text-3xl uppercase font-[Hattori] mx-auto text-center mb-6"
          >
            Wedding wish
          </motion.h3>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-sm text-zinc-300/80"
          >
            Terima kasih telah meninggalkan pesan dan kesan untuk kami berdua
          </motion.p>
        </div>
        <div className=" w-full ">
          <div className="py-1 backdrop-blur shadow-lg shadow-black/10 px-2 lg:px-12 bg-[#242424]  ">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-12 text-center text-zinc-400"
            >
              {!posts ? (
                <span className="italic">1 comments</span>
              ) : (
                <>
                  {posts.length + 1} <span className="italic"> comments</span>
                </>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-full px-2 lg:px-4 lg:max-w-3xl mx-auto mb-4 antialiased bg-white/90 p-4 shadow-lg mt-6 "
            >
              <div className="items-center border-b border-indigo-900/40 pb-1 mb-4">
                <div className="flex items-center justify-between">
                  <div className=" flex items-center gap-1">
                    <ImPushpin className="text-zinc-700" />
                    <p className="text-gray-800 text-lg sm:text-xl">
                      WebHouse.id
                    </p>
                  </div>
                </div>
                <em className="text-sm text-[#989898]">
                  Monday, January 9, 2023 9:52 AM
                </em>
              </div>
              <p className="mb-6 text-[#555] text-lg">
                Happy wedding John & Elsa, semoga menjadi keluarga yang Sakinah,
                Mawadah & Warohmah.. <br /> Amiin .. 🤲{" "}
              </p>
            </motion.div>
            <div className="flex flex-col-reverse max-w-full  px-0 lg:px-0 lg:max-w-3xl  mx-auto ">
              {posts?.map((post, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  key={post._id}
                  className="antialiased mb-4 bg-white/90 p-4 relative shadow-lg"
                >
                  <div className="items-center border-b border-indigo-900/40 pb-1 mb-4">
                    <div className="flex  items-center justify-between">
                      <p className="text-gray-800 capitalize text-lg sm:text-xl">
                        {post.name}
                      </p>
                      <em
                        className={
                          post.presence === "hadir"
                            ? "bg-green-500 capitalize p-1 text-white absolute top-0 right-0 rounded-bl-md text-sm"
                            : "bg-red-400 capitalize p-1 text-white absolute top-0 right-0 rounded-bl-md text-sm"
                        }
                      >
                        {post.presence}
                      </em>
                    </div>
                    <em className="text-sm text-[#989898]">{post.createdAt}</em>
                  </div>
                  <p className="mb-6 text-[#555] text-lg">{post.message}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <CommentForm guest={guest} />
      </div>
    </>
  );
};

export default GetComment;
