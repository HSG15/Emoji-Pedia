import React from "react";

function Card(props){
    return (
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.title}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>{props.means}</dd>
        </div>
      );
}

export default Card;