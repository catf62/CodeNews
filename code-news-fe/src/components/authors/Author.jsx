import React from 'react';
import { Link } from 'react-router-dom';

const Author = (props) => {

  return(
    <div className="Author-Box">
    <img alt={props.author.name} src={props.author.imageUrl}></img>
    <div className="Author-Info">
      <br></br>
      <p>Name: {props.author.name}</p>
      <br></br>
      <p>Position: {props.author.position}</p>
      <br></br>
      <p>Biography: {props.author.biography}</p>
      <br></br>
      <br></br>
      <br></br>
      <Link to={'/authors/'+props.author.id+'/edit'}>
      <button className="Delete-Page-Button">Edit</button>
      </Link>
      <Link to={'/authors/'+props.author.id+'/delete'}>
      <button className="Delete-Page-Button">Delete</button>
      </Link>
    </div>


    </div>
  )
}

export default Author;
