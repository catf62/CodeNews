import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Request from '../components/helpers/Request.js';

class DeleteAuthorContainer extends Component{
  constructor(props) {
    super(props);
    this.state={
      author: {}
    }
    this.handleAuthorDelete = this.handleAuthorDelete.bind(this);
  }

  componentWillMount(){
    let request = new Request();

    request.get('/api/authors/'+this.props.id)
    .then(data => {
      this.setState(
        {
          author: data
        }
      )
    }
  )
}

handleAuthorDelete(){
  const request = new Request();
  request.delete('/api/authors/'+this.props.id, this.state.author)
  .then (() => {
    window.location = 'admin/authors/new'
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
    <p>Are you sure you want to delete author "{this.state.author.name}"?</p>
    <br></br>
    <br></br>
    <Link to={"/"}>
    <button className="Delete-Page-Button" onClick={this.handleAuthorDelete}>Confirm</button>
    </Link>
    <Link to={"/admin/authors/new"}>
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

export default DeleteAuthorContainer;
