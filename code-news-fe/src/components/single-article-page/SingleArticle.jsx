import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SingleArticle = (props) => {

    const displayedKeywords =
     props.keywords.map((keyword, index) => {
      return <p key={index} className="Medium-Blue-BG Solid-Black-Border-Curved Single-Article-Page-Keyword">{keyword}</p>
    })

  return (
      <div className="Solid-Black-Border-Curved Single-Article-Page-Article">
        <h3 className="Single-Article-Page-Article-Headline">{props.article.headline}</h3>
        <h5 className="Single-Article-Page-Article-Author">By {props.author.name}</h5>
        <p className="Single-Article-Page-Article-Content">{props.article.content}</p>
        <img className="Single-Article-Page-Article-Image" src={props.article.imageUrl}/>
        <p>{props.article.datePosted}</p>
        <div className="Single-Article-Page-Article-Keywords">
          {displayedKeywords}
        </div>
        <Link to={'/articles/'+props.id+'/edit'}>
        <button className="Button">Edit</button>
        </Link>
        <Link to={'/articles/'+props.id+'/delete'}>
        <button className="Button">Delete</button>
        </Link>
      </div>
    )
  }


export default SingleArticle;
