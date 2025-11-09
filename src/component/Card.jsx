import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import PostList from "../store/Post-List-Provider";

/**
 * Card component
 * - Renders a responsive grid of cards using Tailwind classes
 * - Accepts optional `items` prop: array of { id, title, description, image, tag }
 */
function Card({ post }) {
  const {deletePost} = useContext(PostList);
  // console.log(deletePost)
  
  return (
    <>
    <center>

    
      <div className="card p-3 mb-3  max-w-[50%] text-start">
        <div className="card-body">
          <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
           onClick={()=>{deletePost(post.id)}}>
            <MdDelete />
          </div>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag,index) => (
            <span key={index} className="badge text-bg-primary m-1" >{tag}</span>
          ))}
          <div className="alert alert-warning mt-2" role="alert">
            This post has {post.reactions} reactions!
          </div>
        </div>
      </div>
      </center>
    </>
  );
}

export default Card;
