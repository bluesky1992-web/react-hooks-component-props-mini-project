import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from  './ArticleList'
// import logo from "../assets/logo.svg";



// console.log(blogData.image);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About about={blogData.about} image={blogData.image} />
      <ArticleList />
    </div>
  );
}


export default App;
