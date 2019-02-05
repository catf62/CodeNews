import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DeleteArticleContainer extends Component{
  constructor(props) {
    super(props);
    this.state={
      article: props.article
    }
  }

render(){
  return(
    <div>
    <p>Are you sure you want to delete article "{this.state.article.headline}"?</p>
    <Link to={"/"}>
    <button className="Button">Confirm</button>
    </Link>
    <Link to={"/article/" + this.state.article.id}>
    <button className="Button">Cancel</button>
    </Link>
    </div>
  )
}
}

export default DeleteArticleContainer;
