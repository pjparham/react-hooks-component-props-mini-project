import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    
    const displayArticles = posts.map((blogPost) => {
        return (
            <Article title ={blogPost.title} date={blogPost.date} preview={blogPost.preview} key={blogPost.id} minutes={blogPost.minutes}/>
        )
    })
    
    return(
        <main>
            {displayArticles}
        </main>
    )
}

export default ArticleList