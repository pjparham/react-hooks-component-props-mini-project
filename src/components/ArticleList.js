import React from "react";
import Article from "./Article";

function ArticleList({blogPosts}){
    
    const displayArticles = blogPosts.map((blogPost) => {
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