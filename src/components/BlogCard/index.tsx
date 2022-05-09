import React from "react";
import { IAuthor } from "../../interfaces/Author";
import { Container } from "./styles";

function BlogCard({
  src,
  title,
  author,
}: {
  src: string;
  title: string;
  author: IAuthor;
}) {
  return (
    <Container>
      <img src={src} alt="" />
      <div>
        <h1>{title}</h1>
        <div>
          <img src={author.avatar} alt="" />
          <span>{author.name}</span>
        </div>
      </div>
    </Container>
  );
}

export default BlogCard;
