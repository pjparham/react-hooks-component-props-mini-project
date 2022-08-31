import React from "react";

function emojiList(minutes){
    const interval = minutes > 30 ? 10 : 5;
    const emoji = minutes > 30 ? "🍱" : "☕️";

    let emojis="";
    for (let i = 0; i < minutes; i+= interval){
        emojis += emoji;
    }
    return emojis;
}

function Article({
    title,
    date = "January 1, 1970",
    preview,
    minutes
}){
    const emojis = emojiList(minutes)
    return(
        <article>
            <h3>{title}</h3>
            <small>{date} • {emojis}{" "}{minutes} min read </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article