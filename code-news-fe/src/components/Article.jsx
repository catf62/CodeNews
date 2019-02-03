import React, { Component } from 'react';

class Article extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    const keywords = this.props.article.keywords.map((keyword, index) => {
      return <p key={index} className="Medium-Blue-BG Solid-Black-Border-Curved Keyword">{keyword}</p>
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
      <div className="Solid-Black-Border-Curved Article">
      <h3 className="Article-Headline">{this.props.article.headline}</h3>
      <h5 className="Article-Author">By {this.props.article.author}</h5>
      <p>{day}/{month}/{this.props.article.date.getFullYear()}</p>
      <p>{this.props.article.content}</p>
      <img className="Article-Image" src={this.props.article.imageurl}/>
      <div className="Article-Keywords">
      {keywords}
      </div>
      </div>
    );
  }
}

export default Article;
