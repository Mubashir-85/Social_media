import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import PostList from "../store/Post-List-Provider";

/**
 * Card component
 * - Renders a responsive grid of cards using Tailwind classes
 * - Accepts optional `items` prop: array of { id, title, description, image, tag }
 */
function Card({ post }) {
  const { deletePost } = useContext(PostList);

  return (
    <div className="max-w-xl w-full mx-auto p-4 bg-black text-white rounded-lg shadow-sm mb-4 relative">
      <button
        onClick={() => deletePost(post.id)}
        aria-label="Delete post"
        className="absolute -top-2 -right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 focus:outline-none"
      >
        <MdDelete />
      </button>

      <h5 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h5>
      <p className="text-sm text-gray-300 mb-3">{post.body}</p>

      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-indigo-100 text-indigo-900 font-semibold px-2 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
