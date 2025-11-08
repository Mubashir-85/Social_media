import { useReducer } from "react";
import PostList from "./Post-List-Provider";

const postListReducer = (currentPost, action) => {
  return currentPost;
};

const CardListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, default_value);

  const addPost = () => {};
  const deletePost = () => {};
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
