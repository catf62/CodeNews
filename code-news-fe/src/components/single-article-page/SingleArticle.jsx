import React from 'react';
import { Link } from 'react-router-dom';

const SingleArticle = (props) => {
  const {id, headline, author, content, keywords, imageurl, date} = props.article

  return (
    <div>
    <Link to={'/article/'+id}>
    </Link>
    <p>{content}</p>
    </div>
  )
}

export default SingleArticle;
