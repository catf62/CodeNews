import React from 'react';
import { Link } from 'react-router-dom';

const SingleArticle = (props) => {
  const {id, headline, author, content, keywords, imageurl, date} = props.article;

  console.log(props.article);

  return (
    <div>
    <p>{content}</p>
    </div>
  )
}

export default SingleArticle;
