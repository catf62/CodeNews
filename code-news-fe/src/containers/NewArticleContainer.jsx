import React, { Component } from 'react';

class NewArticleContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headline: "",
      author: "",
      content: "",
      imageurl: "",
      keywords: []
    }
  }

  render(){
    return (
      <form>
        <input type="submit" value="Save"/>
      </form>
    )
  }
}

export default NewArticleContainer;
