import React from 'react'
// import ArticleList from './ArticleList'
function Article({title,date,preview}){
    
    return (
        <article>
        <h3>{title}</h3>
        <small>{date ? date: "January 1, 1970" }</small>
        <p>{preview}</p>
        </article>
    )
}
// Article.defaultProps = {
//     date: "January 1, 1970",
//   };
  
export default Article