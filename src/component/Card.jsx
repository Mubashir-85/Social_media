import React from "react";

/**
 * Card component
 * - Renders a responsive grid of cards using Tailwind classes
 * - Accepts optional `items` prop: array of { id, title, description, image, tag }
 */
function Card({ post }) {
  console.log(post.tags);
  return (
    <>
      <div className="card p-3 mb-3  max-w-[50%] ">
        <div className="card-body">
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reactions}
            <span class="visually-hidden">unread messages</span>
          </span>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span class="badge text-bg-primary m-1">{tag}</span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
