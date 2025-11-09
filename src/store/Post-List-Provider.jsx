import { createContext } from "react";


const PostList = createContext({
    postList : [],
    addPost : ()=>{},
    addPosts:()=>{},
    deletePost : ()=>{},
});



export default PostList;