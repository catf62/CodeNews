import React, { Component } from 'react';
import Header from '../components/general/Header';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';
import AuthorsListContainer from './AuthorsListContainer';
import Request from '../components/helpers/Request.js';

class EditAuthorContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.author.id,
      name: props.author.name,
      position: props.author.position,
      bio: props.author.biography,
      imageUrl: props.author.imageUrl
    }
    this.nameKeyUp = this.nameKeyUp.bind(this);
    this.positionKeyUp = this.positionKeyUp.bind(this);
    this.bioKeyUp = this.bioKeyUp.bind(this);
    this.imageUrlKeyUp = this.imageUrlKeyUp.bind(this);
    this.handleAuthorSelect = this.handleAuthorSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    request.put('/api/authors/'+this.state.id, newAuthor)
      .then (() => {
        window.location = '/admin/author/new'
      })
  }

  nameKeyUp(event) {
    console.log(this.state);
  this.setState({
    name: event.target.value
  });
  }

  positionKeyUp(event) {
    console.log(this.state);
  this.setState({
    position: event.target.value
  });
  }

  bioKeyUp(event) {
    console.log(this.state);
  this.setState({
    bio: event.target.value
  });
  }

  imageUrlKeyUp(event) {
    console.log(this.state);
  this.setState({
    imageUrl: event.target.value
  });
  }

  handleAuthorSelect(id){
    this.props.handleAuthorLinkClick(id);
  }

  render(){
    return (
      <div>

      <p>Edit Author: </p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Name">Author Name</label>
          <input value={this.state.name} onChange={this.nameKeyUp} type="text" id="Name"/>

          <label htmlFor="Position">Position</label>
          <input value={this.state.position} onChange={this.positionKeyUp} type="text" id="Position"/>

          <label htmlFor="Bio">Bio</label>
          <input value={this.state.bio} onChange={this.bioKeyUp} type="text" id="Bio"/>

          <label htmlFor="ImageUrl">Image url</label>
          <input value={this.state.imageUrl} onChange={this.imageUrlKeyUp} type="text" id="ImageUrl"/>

          <input type="submit" value="Save"/>
        </form>
      </div>
    )
  }
}

export default EditAuthorContainer;
