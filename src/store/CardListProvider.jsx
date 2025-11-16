import { useReducer, useEffect, useState } from "react";
import PostList from "./Post-List-Provider";

const postListReducer = (currentPost, action) => {
  let newPost = currentPost;
  if (action.type === "DELETE_POST") {
    newPost = currentPost.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "SERVER_POST") {
    newPost = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPost = [action.payload, ...currentPost];
  }
  return newPost;
};

const CardListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, [], () => {
    const localData = localStorage.getItem("posts");
    return localData ? JSON.parse(localData) : [];
  });

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addPosts = (posts) => {
    dispatchPostList({
      type: "SERVER_POST",
      payload: { posts },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(postList));
  }, [postList]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (postList.length === 0) {
      fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then((data) => {
          const cleanedPosts = data.posts.map((post) => ({
            id: post.id,
            title: post.title,
            body: post.body,
            tags: post.tags || ["GENERAL"],
          }));
          addPosts(cleanedPosts);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);
  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addPosts: addPosts,
        fetching: loading,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default CardListProvider;
