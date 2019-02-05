import React, { Component } from 'react';
import AuthorList from '../components/authors/AuthorList';

class AuthorsListContainer extends Component {
  constructor(props) {
    super(props)
    this.state= {}
  }

  render(){
    console.log(this.props.authors);
    return(
      <AuthorList authors={this.props.authors}/>
    )
  }
}

export default AuthorsListContainer;
