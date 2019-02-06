import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Request from '../components/helpers/Request.js';

class DeleteArticleContainer extends Component{
  constructor(props) {
    super(props);
    this.state={
      article: props.article
    }
    this.handleArticleDelete = this.handleArticleDelete.bind(this);
  }

  handleArticleDelete(){
    const request = new Request();
    request.delete('/api/articles/'+this.state.article.id, this.state.article)
      .then (() => {
        window.location = '/'
      })
  }

render(){
  return(
    <div className="New-Article-Box">
    <div className="Form-Wrapper">
    <div className="New-Article-Form">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <p>Are you sure you want to delete article "{this.state.article.headline}"?</p>
    <br></br>
    <br></br>
    <Link to={"/"}>
    <button className="Delete-Page-Button" onClick={this.handleArticleDelete}>Confirm</button>
    </Link>
    <Link to={"/article/" + this.state.article.id}>
    <button className="Delete-Page-Button">Cancel</button>
    </Link>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
    </div>
    </div>
  )
}
}

export default DeleteArticleContainer;
