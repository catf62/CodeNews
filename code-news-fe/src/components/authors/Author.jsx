import React from 'react';
import { Link } from 'react-router-dom';

const Author = (props) => {

  function handleAuthorSelect(){
    props.handleAuthorLinkClick(props.author.id)
  }

  return(
    <div>
    <p>{props.author.name}</p>
    <p>{props.author.position}</p>
    <p>{props.author.biography}</p>
    <img src={props.author.imageUrl}></img>
    <Link to={'/author/'+props.author.id+'/edit'}>
    <button onClick={handleAuthorSelect}>Edit</button>
    </Link>
    <Link to={'/author/'+props.author.id+'/delete'}>
    <button onClick={handleAuthorSelect}>Delete</button>
    </Link>
    </div>
  )
}

export default Author;
