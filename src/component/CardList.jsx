import React, { useContext, useEffect } from "react";
import Card from "./Card";
import PostList from "../store/Post-List-Provider";
import Welcome from "./Welcome";

function CardList() {
  const { postList , addPosts } = useContext(PostList);
//   console.log(postList)

useEffect(()=>{
  fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data)=>{
        const cleanedPosts = data.posts.map((post)=>({
            id: post.id,
            title:post.title,
            body:post.body,
            // reaction: post.reactions.likes || post.reaction,
            tags: post.tags || ["GENERAL"],
        }))
        addPosts(cleanedPosts)
      })
},[])

  return (
    <>

      {postList.length === 0 && (<Welcome/>)}
      {postList.map((post, index) => (
        <Card key={post.id || index} post={post} />
      ))}
    </>
  );
}

export default CardList;
