import { useId, useReducer } from "react";
import PostList from "./Post-List-Provider";

const postListReducer = (currentPost, action) => {
  let newPost = currentPost;
  if (action.type === "DELETE_POST") {
    newPost = currentPost.filter((post) => post.id !== action.payload.postId);
  } else if( action.type === "ADD_POST") {
    newPost = [action.payload, ...currentPost];
  }
  return newPost;
};

const CardListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    default_value
  );

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
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const default_value = [
  {
    id: "1",
    title: "Hii there I am using Social Media",
    body: " This is my first post on Social Media",
    userId: " 101",
    tags: ["social", "media", "firstpost"],
    reactions: 32,
  },
  {
    id: "2",
    title: "Going to the market",
    body: " I am planning to go to the market today to buy some groceries.",
    userId: " 102",
    tags: ["market", "groceries", "shopping"],
    reactions: 25,
  },
  {
    id: "3",
    title: "Gardening Tips for Beginners",
    body: " If you're new to gardening, start with easy-to-grow plants like herbs and succulents. Make sure to water them regularly and provide adequate sunlight.",
    userId: " 103",
    tags: ["Gardening", "plants", "tips"],
    reactions: 45,
  },
];
export default CardListProvider;
