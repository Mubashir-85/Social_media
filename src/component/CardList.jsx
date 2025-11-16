import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import PostList from "../store/Post-List-Provider";
import Loading from "./Loading";
import Welcome from "./Welcome";

function CardList({search}) {
  const { postList, fetching } = useContext(PostList);
  const filterPosts  = postList.filter((post)=>{
    return post.title.toLowerCase().includes(search.toLowerCase())||
    post.body.toLowerCase().includes(search.toLowerCase())||
    post.tags.some((tag)=>tag.toLowerCase().includes(search.toLowerCase()))
  })
  


  return (
    <>
      {fetching && <Loading/>}
      {!fetching && postList.length === 0 && (<Welcome/>)}
      {!fetching && filterPosts.map((post, index) => (
        <Card key={`${post.id}-${index}`} post={post} />
      ))}
    </>
  );
}

export default CardList;
