import React, { useContext } from "react";
import Card from "./Card";
import PostList from "../store/Post-List-Provider";

function CardList() {
  const { postList } = useContext(PostList);
  console.log(postList);
  return (
    <>
      {postList.map((post) => (
        <Card key={post.id} post={post} />
      ))}

      
    </>
  );
}

export default CardList;
