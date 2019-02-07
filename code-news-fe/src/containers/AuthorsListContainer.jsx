import React, { Component } from 'react';
import AuthorList from '../components/authors/AuthorList';


class AuthorsListContainer extends Component {
  constructor(props) {
    super(props)
    this.state= {}
  }

  handleAuthorSelect(id){
    this.props.handleAuthorLinkClick(id);
  }

  render(){
    return(
      <AuthorList authors={this.props.authors}/>
    )
  }
}

export default AuthorsListContainer;
