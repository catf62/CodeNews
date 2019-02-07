import React, { Component } from 'react';
import AuthorsListContainer from './AuthorsListContainer';
import Request from '../components/helpers/Request.js';
import '../styles/AddNewArticle.css';

class NewAuthorContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      position:"",
      bio:"",
      imageUrl: ""
    }
    this.nameKeyUp = this.nameKeyUp.bind(this);
    this.positionKeyUp = this.positionKeyUp.bind(this);
    this.bioKeyUp = this.bioKeyUp.bind(this);
    this.imageUrlKeyUp = this.imageUrlKeyUp.bind(this);
    this.handleAuthorSelect = this.handleAuthorSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();
    const newAuthor = {
      name: this.state.name,
      position: this.state.position,
      biography: this.state.bio,
      imageUrl: this.state.imageUrl
    }

    const request = new Request();
    request.post('/api/authors', newAuthor)
    .then (() => {
      window.location = '/admin/authors/new'
    })
  }

  nameKeyUp(event) {
    this.setState({
      name: event.target.value
    });
  }

  positionKeyUp(event) {
    this.setState({
      position: event.target.value
    });
  }

  bioKeyUp(event) {
    this.setState({
      bio: event.target.value
    });
  }

  imageUrlKeyUp(event) {
    this.setState({
      imageUrl: event.target.value
    });
  }

  handleAuthorSelect(id){
    this.props.handleAuthorLinkClick(id);
  }

  render(){
    return (
      <div className="New-Article-Box">
      <div className="Form-Wrapper">

      <AuthorsListContainer authors={this.props.authors} handleAuthorLinkClick={this.handleAuthorSelect}/>
      <p>Add New Author: </p>
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="Name">Author Name</label>
      <br></br>
      <input onKeyUp={this.nameKeyUp} type="text" id="Name"/>
      <br></br>
      <label htmlFor="Position">Position</label>
      <br></br>
      <input onKeyUp={this.positionKeyUp} type="text" id="Position"/>
      <br></br>
      <label htmlFor="Bio">Bio</label>
      <br></br>
      <input onKeyUp={this.bioKeyUp} type="text" id="Bio"/>
      <br></br>
      <label htmlFor="ImageUrl">Image url</label>
      <br></br>
      <input onKeyUp={this.imageUrlKeyUp} type="text" id="ImageUrl"/>
      <br></br>
      <br></br>
      <input type="submit" value="Save"/>
      </form>
      </div>
      </div>
    )
  }
}

export default NewAuthorContainer;
