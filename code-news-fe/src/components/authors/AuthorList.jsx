import React, { Component } from 'react';
import Author from './Author';

class AuthorList extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const authors = this.props.authors.map((author, index) => {
      return <Author key={index} author={author} />
    })

    return(
      <div>
      {authors}
      </div>
    )
  }
}

export default AuthorList;
