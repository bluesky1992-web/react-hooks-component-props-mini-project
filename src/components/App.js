import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from  './ArticleList'



console.log(blogData);

function App({image ="logo.svg"}) {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About about={blogData.about} src={blogData.image} />
      <ArticleList />
    </div>
  );
}


export default App;
