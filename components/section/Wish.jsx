import CommentForm from "../commentForm";
import { FcOk } from "react-icons/fc";

const Wish = ({ guest, posts }) => {
  return (
    <div className="w-full min-h-screen" id="wish">
      <CommentForm guest={guest} />
      <div className="w-full py-20 relative bg-[#191919] pl-3 lg:px-10 ">
        <h2 className="text-zinc-400">
          {posts.length + 1}{" "}
          <span className="italic text-zinc-400">Post Comment</span>
        </h2>
        <ol className="border-l border-gray-400 p-8 dark:border-zinc-600/60  ">
          <li className="w-full border-b rounded-md pb-2 border-zinc-700">
            <div className="absolute w-3 h-3 left-1 lg:left-8 ">
              <FcOk size={20} />
            </div>
            <span className="mb-1 text-lg lg:text-xl font-normal leading-none text-zinc-700 dark:text-zinc-100">
              WebHouse.id
            </span>
            <p className="mb-2 p-2 text-md leading-relaxed lg:text-md text-zinc-400 ">
              Happy wedding Rahmadi & Dinda, semoga menjadi keluarga yang
              Sakinah, Mawadah & Warohmah.. Amiin .. 🤲
            </p>
            <small className="text-zinc-500 text-md p-2 ">
              10 Juni 2023, 9:14 pm
            </small>
          </li>
        </ol>
        {posts?.map((post, i) => (
          <ol
            key={i}
            className="border-l  border-gray-200 p-8 dark:border-zinc-600/60 "
          >
            <li className="w-full border-b pb-2 rounded-md border-zinc-700">
              <div className="absolute w-3 h-3 left-1 lg:left-8  ">
                <FcOk size={20} />
              </div>
              <span className="mb-1 text-lg lg:text-xl font-normal leading-none text-zinc-700 dark:text-zinc-100">
                {post.name}
              </span>

              <p className="mb-4 p-2 text-md leading-relaxed lg:text-md  text-zinc-400 ">
                {post.comments}
              </p>
              <small className="text-zinc-500 text-md p-2">{post.date}</small>
            </li>
          </ol>
        ))}
      </div>
    </div>
  );
};

export default Wish;
