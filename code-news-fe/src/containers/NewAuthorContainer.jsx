import React, { Component } from 'react';
import Header from '../components/general/Header';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';
import AuthorsListContainer from './AuthorsListContainer';

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
      <AuthorsListContainer authors={this.props.authors} handleAuthorLinkClick={this.handleAuthorSelect}/>

      <p>Add New Author: </p>
        <form>
          <label htmlFor="Name">Author Name</label>
          <input onKeyUp={this.nameKeyUp} type="text" id="Name"/>

          <label htmlFor="Position">Position</label>
          <input onKeyUp={this.positionKeyUp} type="text" id="Position"/>

          <label htmlFor="Bio">Bio</label>
          <input onKeyUp={this.bioKeyUp} type="text" id="Bio"/>

          <label htmlFor="ImageUrl">Image url</label>
          <input onKeyUp={this.imageUrlKeyUp} type="text" id="ImageUrl"/>  

          <input type="submit" value="Save"/>
        </form>
      </div>
    )
  }
}

export default NewAuthorContainer;
