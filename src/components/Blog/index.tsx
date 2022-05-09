import BlogCard from "../BlogCard";
import { Container, CardList } from "./styles";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import { data } from "./data";

function Blog() {
  const scrollRef = useHorizontalScroll();
  return (
    <section id="blog">
      <Container>
        <div>
          <h1>Read Our blog</h1>
          <span>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </span>
        </div>

        <CardList ref={scrollRef as any}>
          {data.map(({ title, src, author }, index) => (
            <BlogCard key={index} title={title} src={src} author={author} />
          ))}
        </CardList>
      </Container>
    </section>
  );
}

export default Blog;
