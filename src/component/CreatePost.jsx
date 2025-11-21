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
    <div className="w-full flex items-center justify-center py-6 sm:py-8 md:py-10 px-4 sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl p-4 sm:p-6 md:p-8 rounded-lg bg-gray-800 text-white shadow-lg"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">Create Post</h2>

        <div className="mb-4">
          <label htmlFor="userId" className="block text-xs sm:text-sm md:text-base font-medium mb-2">
            User ID
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
            id="userId"
            placeholder="Enter Your User ID"
            ref={userIdelement}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="post-title" className="block text-xs sm:text-sm md:text-base font-medium mb-2">
            Post Title
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
            id="post-title"
            placeholder="Enter Your Post Title here"
            ref={postTitleelement}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="body" className="block text-xs sm:text-sm md:text-base font-medium mb-2">
            Post Content
          </label>
          <textarea
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm resize-none"
            id="body"
            placeholder="Enter Your Post Content here"
            rows="4"
            ref={bodyelement}
          ></textarea>
        </div>

        <div className="mb-6">
          <label htmlFor="tags" className="block text-xs sm:text-sm md:text-base font-medium mb-2">
            Hash Tags
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
            id="tags"
            placeholder="Enter tags separated by spaces"
            ref={tagselement}
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-150 text-sm sm:text-base"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;


  
