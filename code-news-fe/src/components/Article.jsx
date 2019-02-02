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

    let day = this.props.article.date.getDate().toString();
    if (this.props.article.date.getDate() < 10) {
      day = ("0" + day).slice(-2);
    }

    let month = (this.props.article.date.getMonth() + 1).toString();
    if (this.props.article.date.getMonth() < 10) {
      month = ("0" + month).slice(-2);
    }

    return (
      <>
      <h3>{this.props.article.headline}</h3>
      <h5>By {this.props.article.author}</h5>
      <p>{this.props.article.content}</p>
      {keywords}
      <img className="Article-Image" src={this.props.article.imageurl}/>
      <p>{day}/{month}/{this.props.article.date.getFullYear()}</p>
      </>
    );
  }
}

export default Article;
