import React from 'react';
import { Link } from 'react-router-dom';

const SingleArticle = (props) => {

  render(){
    const displayedKeywords =
    props.keywords.map((keyword, index) => {
      return <p key={index} className="Single-Article-Page-Keyword-Box">{keyword}</p>
    })

  return (
      <div className="Single-Article-Page-Article">
        <div className="Single-Article-Box">

          <div className="Single-Article-Headline-And-Image-Box">
            <h3 className="Single-Article-Page-Article-Headline">{props.article.headline}</h3>
            <img className="Single-Article-Page-Article-Image" src={props.article.imageUrl}/>
          </div>

          <div className="Single-Article-Page-Author-And-Date-Box">
            <h5 className="Single-Article-Page-Article-Author">By {props.author.name}</h5>
            <p className="Single-Article-Page-Article-Date">{props.article.datePosted}</p>
          </div>
          <br></br>

          <p className="Single-Article-Page-Article-Content">{props.article.content}</p>
          <br></br>
          <div className="Single-Article-Page-Article-Keywords">
            <p>Keywords: </p>
            {displayedKeywords}
          </div>
          <Link to={'/articles/'+props.id+'/edit'}>
          <button className="Single-Article-Page-Button">Edit</button>
          </Link>
          <Link to={'/articles/'+props.id+'/delete'}>
          <button className="Single-Article-Page-Button">Delete</button>
          </Link>
        </div>
      </div>
    )
  }
}


export default SingleArticle;
