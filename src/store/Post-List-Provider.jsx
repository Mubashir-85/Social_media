import { createContext } from "react";

const Default_value = {
    postList : [],
    addPost : ()=>{},
    deletePost : ()=>{},
};
const PostList = createContext(Default_value);



export default PostList;