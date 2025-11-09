import { useReducer } from "react";
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
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, title, postBody, reactionCount, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Math.random().toString(),
        title: title,
        body: postBody,
        userId: userId,
        tags: tags,
        reactions: reactionCount,
      },
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
  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addPosts: addPosts,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default CardListProvider;
