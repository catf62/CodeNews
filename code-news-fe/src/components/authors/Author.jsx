import React from 'react';

const Author = (props) => {
  return(
    <div>
    <p>{props.author.name}</p>
    <p>{props.author.position}</p>
    <p>{props.author.biography}</p>
    <img src={props.author.imageUrl}></img>
    <button>Edit</button>
    <button>Delete</button>
    </div>
  )
}

export default Author;
