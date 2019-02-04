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
        <label htmlFor="Headline">Headline</label>
        <input type="text" value={this.state.headline} id="Headline"/>
        <label htmlFor="Author">Author</label>
        <input type="text" value={this.state.author} id="Author"/>
        <label htmlFor="Content">Content</label>
        <input type="text" value={this.state.content} id="Content"/>
        <label htmlFor="Image url">Image url</label>
        <input type="text" value={this.state.imageurl} id="Image url"/>
        <label htmlFor="Keywords">Keywords</label>
        <input type="text" value={this.state.keywords} id="Keywords"/>
        <input type="submit" value="Save"/>
      </form>
    )
  }
}

export default NewArticleContainer;
