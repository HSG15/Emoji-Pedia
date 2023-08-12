import React from "react";
import Card from "./Card";
import emoji from "./emoji";

function createCard(emoji){
    return(
        <Card 
            key = {emoji.id}
            title = {emoji.title}
            name = {emoji.name}
            means = {emoji.means}
        />
    )
}

function App(){
    return (
        <div>
            <h1> <span>emojipedia</span> </h1>
            <dl className="dictionary">{emoji.map(createCard)}</dl>
        </div>
    )
}

export default App