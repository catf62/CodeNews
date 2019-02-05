import React, { Component } from 'react';
import Author from './Author';

class AuthorList extends Component {
  constructor(props) {
    super(props);
    this.handleAuthorSelect = this.handleAuthorSelect.bind(this);
  }

  handleAuthorSelect(id){
    this.props.handleAuthorLinkClick(id);
  }

  render(){
    const authors = this.props.authors.map((author, index) => {
      return <Author handleAuthorLinkClick={this.handleAuthorSelect} key={index} author={author} />
    })

    return(
      <div>
      {authors}
      </div>
    )
  }
}

export default AuthorList;
