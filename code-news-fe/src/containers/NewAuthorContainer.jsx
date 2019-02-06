import React, { Component } from 'react';
import Header from '../components/general/Header';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';
import AuthorsListContainer from './AuthorsListContainer';

class NewAuthorContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
    this.nameKeyUp = this.nameKeyUp.bind(this);
    this.handleAuthorSelect = this.handleAuthorSelect.bind(this);
  }

  nameKeyUp(event) {
    console.log(this.state);
  this.setState({
    name: event.target.value
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
          <input type="submit" value="Save"/>
        </form>
      </div>
    )
  }
}

export default NewAuthorContainer;
