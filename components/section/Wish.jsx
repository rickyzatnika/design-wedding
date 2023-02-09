/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

const Wish = () => {
  return (
    <div className="w-full h-screen" id="wish">
      <div className="min-w-full mx-auto mt-10 py-20 relative bg-zinc-800 px-4 lg:px-10 ">
        <ol className="border-l  border-gray-200 p-8 dark:border-indigo-900/60 ">
          <li>
            <div className="absolute w-3 h-3  rounded-full mt-1.5 left-8 bg-indigo-600"></div>
            <span className="mb-1 text-xl font-normal leading-none text-zinc-700 dark:text-zinc-100">
              WebHouse.id
            </span>

            <p className="mb-4 text-lg font-thin text-zinc-300 ">
              Happy wedding John & Elsa, semoga menjadi keluarga yang Sakinah,
              Mawadah & Warohmah.. Amiin .. 🤲
            </p>
            <small className="text-zinc-500">
              Monday, January 9, 2023 9:52 AM
            </small>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Wish;
