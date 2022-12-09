import React from "react";
import blogData from "../data/blog";
import Article from './Article'



function ArticleList() {
  const post = blogData.posts.map((article) => {
    return (
      <Article key={article.id} title={article.title} date={article.date} preview={article.preview} />
    );
  });
//   console.log(posts);

  return <main>{post}</main>;
}

export default ArticleList;
