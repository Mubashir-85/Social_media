import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import PostList from "../store/Post-List-Provider";

function Card({ post }) {
  const { deletePost } = useContext(PostList);

  return (
    <div className="w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto p-3 sm:p-4 md:p-5 bg-sky-50 text-white rounded-lg shadow-2xl mb-4 relative hover:shadow-black transition">
      <button
        onClick={() => deletePost(post.id)}
        aria-label="Delete post"
        className="absolute -top-2 -right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 focus:outline-none transition text-lg sm:text-xl"
      >
        <MdDelete />
      </button>

      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 pr-8">
        {post.title}
      </h2>
      <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 mb-3 leading-relaxed">
        {post.body}
      </p>

      <div className="flex flex-wrap gap-2">
        {post.tags?.map((tags, index) => (
          <span
            key={index}
            className="text-xs sm:text-sm bg-blue-900 text-white font-semibold px-2 py-0.5 sm:px-3 sm:py-1 rounded transition hover:bg-blue-800"
          >
            {tags}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
