import React, { Component } from 'react';

class Article extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    const keywords = this.props.article.keywords.map((keyword, index) => {
      return <p key={index}>{keyword}</p>
    })
    return (
      <>
      <h3>{this.props.article.headline}</h3>
      <h5>By {this.props.article.author}</h5>
      <p>{this.props.article.content}</p>
      {keywords}
      <img className="Article-Image" src={this.props.article.imageurl}/>
      <p>{this.props.article.date.getDate()}-{this.props.article.date.getMonth()}-{this.props.article.date.getFullYear()}</p>
      </>
    );
  }
}

export default Article;
