import React from "react";
import { BlogCard, Container } from "./styles";

function Blog() {
  return (
    <Container>
      <div>
        <h1>Read Our blog</h1>
        <span>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </span>
      </div>
      <BlogCard>
        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
        <div>
          <h1>Quick-start guide to nuts and seeds</h1>
          <div>
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
            <span>Kevin Ibrahim</span>
          </div>
        </div>
      </BlogCard>
    </Container>
  );
}

export default Blog;
