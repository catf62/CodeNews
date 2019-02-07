import React from 'react';
import { Link } from 'react-router-dom';

const Author = (props) => {

  return(
    <div className="Author-Box">
    <p>{props.author.name}</p>
    <p>{props.author.position}</p>
    <p>{props.author.biography}</p>
    <img alt={props.author.name} src={props.author.imageUrl}></img>
    <Link to={'/authors/'+props.author.id+'/edit'}>
    <button>Edit</button>
    </Link>
    <Link to={'/authors/'+props.author.id+'/delete'}>
    <button>Delete</button>
    </Link>
    </div>
  )
}

export default Author;
