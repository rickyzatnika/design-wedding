/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import CommentForm from "../commentForm";
import axios from "axios";
import { FcFeedback, FcLike } from "react-icons/fc";

const Wish = ({ guest }) => {
  const [posts, setPosts] = useState([]);

  const getComments = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_PRO_GET}/api/comment`
    );
    setPosts(res.data);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="w-full min-h-screen" id="wish">
      <CommentForm guest={guest} />
      <div className="w-full py-20 relative bg-[#191919] pl-3 lg:px-10 ">
        <h2 className="text-zinc-100">
          {posts.length + 1} <span className="italic">Post Comment</span>
        </h2>
        <ol className="border-l-2  border-gray-200 p-8 dark:border-zinc-400/60  ">
          <li className="w-full border-b pb-4 border-zinc-700">
            <div className="absolute w-3 h-3 left-1 lg:left-8 ">
              <FcFeedback size={20} />
            </div>
            <span className="mb-1 text-lg lg:text-xl font-normal leading-none text-zinc-700 dark:text-zinc-100">
              WebHouse.id
            </span>

            <p className="mb-2 p-2 text-sm leading-relaxed lg:text-md font-thin text-zinc-300 ">
              Happy wedding John & Elsa, semoga menjadi keluarga yang Sakinah,
              Mawadah & Warohmah.. Amiin .. 🤲
            </p>
            <small className="text-zinc-500 p-2 ">
              9 February 2023, 9:14 pm
            </small>
          </li>
        </ol>
        {posts?.map((post) => (
          <ol
            key={post._id}
            className="border-l-2  border-gray-200 p-8 dark:border-zinc-400/60 "
          >
            <li className="w-full border-b pb-4 border-zinc-700">
              <div className="absolute w-3 h-3 left-1 lg:left-8  ">
                <FcLike size={20} className="animate-pulse" />
              </div>
              <span className="mb-1 text-lg lg:text-xl font-normal leading-none text-zinc-700 dark:text-zinc-100">
                {post.name}
              </span>

              <p className="mb-4 p-2 text-sm leading-relaxed lg:text-md font-thin text-zinc-300 ">
                {post.message}
              </p>
              <small className="text-zinc-500 p-2">{post.createdAt}</small>
            </li>
          </ol>
        ))}
      </div>
    </div>
  );
};

export default Wish;
