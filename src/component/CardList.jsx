import React, { useContext } from "react";
import Card from "./Card";
import PostList from "../store/Post-List-Provider";

function CardList() {
  const { postList } = useContext(PostList);
  return (
    <>
      {postList.map((post,index) => (
        <Card key={post.id || index} post={post} />
      ))}

      
    </>
  );
}

export default CardList;
