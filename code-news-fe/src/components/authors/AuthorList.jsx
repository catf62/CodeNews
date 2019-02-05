import React, { Component } from 'react';

class AuthorList extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const authors = this.props.authors.map((author, index) => {
      return <p key={index}>{author.name}</p>
    })

    return(
      <div>
      {authors}
      </div>
    )
  }
}

export default AuthorList;
