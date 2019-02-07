import React, { Component } from 'react';
import Request from '../components/helpers/Request.js';

class EditAuthorContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      position: "",
      bio: "",
      imageUrl: ""
    }
    this.nameKeyUp = this.nameKeyUp.bind(this);
    this.positionKeyUp = this.positionKeyUp.bind(this);
    this.bioKeyUp = this.bioKeyUp.bind(this);
    this.imageUrlKeyUp = this.imageUrlKeyUp.bind(this);
    this.handleAuthorSelect = this.handleAuthorSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    let request = new Request();

    request.get('/api/authors/'+this.props.id)
    .then(data => {
      this.setState(
        {
          id: this.props.id,
          name: data.name,
          position: data.position,
          bio: data.biography,
          imageUrl: data.imageUrl
        }
      )
    }
  )
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

    <p className="Edit-Author-Title">Edit Author: </p>
    <form className="New-Article-Form" onSubmit={this.handleSubmit}>
    <label htmlFor="Name">Author Name</label>
    <br></br>
    <input size="70" value={this.state.name} onChange={this.nameKeyUp} type="text" id="Name"/>
    <br></br>
    <label htmlFor="Position">Position</label>
    <br></br>
    <input size="70" value={this.state.position} onChange={this.positionKeyUp} type="text" id="Position"/>
    <br></br>
    <label htmlFor="Bio">Bio</label>
    <br></br>
    <input size="70" value={this.state.bio} onChange={this.bioKeyUp} type="text" id="Bio"/>
    <br></br>
    <label htmlFor="ImageUrl">Image url</label>
    <br></br>
    <input size="70" value={this.state.imageUrl} onChange={this.imageUrlKeyUp} type="text" id="ImageUrl"/>
    <br></br>
    <br></br>
    <input size="70" type="submit" value="Save"/>
    <br></br>
    </form>
    </div>
    </div>
  )
}
}

export default EditAuthorContainer;
