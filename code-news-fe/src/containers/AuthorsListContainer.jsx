import React, { Component } from 'react';
import AuthorList from '../components/authors/AuthorList';

class AuthorsListContainer extends Component {
  constructor(props) {
    super(props)
    this.state= {}
    this.handleAuthorSelect = this.handleAuthorSelect.bind(this);
  }

  handleAuthorSelect(id){
    this.props.handleAuthorLinkClick(id);
  }

  render(){
    console.log(this.props.authors);
    return(
      <AuthorList authors={this.props.authors} handleAuthorLinkClick={this.handleAuthorSelect}/>
    )
  }
}

export default AuthorsListContainer;
