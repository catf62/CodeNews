import React from 'react';
import { Link } from 'react-router-dom';

const SingleArticle = (props) => {

    const displayedKeywords =
     props.article.keywords.map((keyword, index) => {
      return <p key={index} className="Medium-Blue-BG Solid-Black-Border-Curved Single-Article-Page-Keyword">{keyword.word}</p>
    })

  return (
      <div className="Solid-Black-Border-Curved Single-Article-Page-Article">
        <h3 className="Single-Article-Page-Article-Headline">{props.article.headline}</h3>
        <h5 className="Single-Article-Page-Article-Author">By {props.article.author.name}</h5>
        <p className="Single-Article-Page-Article-Content">{props.article.content}</p>
        <img className="Single-Article-Page-Article-Image" src={props.article.imageurl}/>
        <p>{props.article.datePosted.getDate()}/{props.article.datePosted.getMonth()}/{props.article.datePosted.getFullYear()}</p>
        <div className="Single-Article-Page-Article-Keywords">
          {displayedKeywords}
        </div>
      </div>
    )
}


export default SingleArticle;
