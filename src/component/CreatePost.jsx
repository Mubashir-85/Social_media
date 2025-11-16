import React, { useContext, useRef } from "react";
import PostList from "../store/Post-List-Provider";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigation = useNavigate();
  const { addPost } = useContext(PostList);
  const userIdelement = useRef();
  const postTitleelement = useRef();
  const bodyelement = useRef();
  const reactionselement = useRef();
  const tagselement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdelement.current.value;
    const title = postTitleelement.current.value;
    const postBody = bodyelement.current.value;
    const tags = tagselement.current.value.split(" ");

    if(!title.trim() || !postBody.trim()){
      alert("please fill all the fields before posting!")
      return
    }

    userIdelement.current.value = "";
    postTitleelement.current.value = "";
    bodyelement.current.value = "";
    tagselement.current.value = "";


    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: Math.random().toString(),
        title: title,
        body: postBody,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post)
        navigation("/");
      });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[50%] items-center mx-auto text-white border p-5 mt-10 rounded-lg bg-gray-800"
      >
        <div className="mb-3">
          <label htmlFor="userId" className="form-label ">
            User ID
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="Enter Your User ID"
            ref={userIdelement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="post-title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="post-title"
            placeholder="Enter Your Post Title here"
            ref={postTitleelement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            className="form-control"
            id="body"
            placeholder="Enter Your Post Content here"
            rows="3"
            ref={bodyelement}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            hashTags
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter Your Tags separated by commas"
            ref={tagselement}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white w-20 p-1 rounded hover:bg-black"
        >
          Post
        </button>
      </form>
    </>

    );
 }

export default CreatePost;


  
