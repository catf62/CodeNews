import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DeleteAuthorContainer extends Component{
  constructor(props) {
    super(props);
    this.state={
      author: props.author
    }
  }

render(){
  return(
    <div>
    <p>Are you sure you want to delete author "{this.state.author.name}"?</p>
    <Link to={"/"}>
    <button className="Button">Confirm</button>
    </Link>
    <Link to={"/author/" + this.state.author.id}>
    <button className="Button">Cancel</button>
    </Link>
    </div>
  )
}
}

export default DeleteAuthorContainer;
