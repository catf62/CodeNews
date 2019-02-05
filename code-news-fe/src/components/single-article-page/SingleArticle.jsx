import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleArticle extends Component {
  constructor(props){
    super(props);
    this.state = {
      article: props.article
    }

  }

  render(){
    const keywords = this.state.article.keywords.map((keyword, index) => {
      return <p key={index} className="Medium-Blue-BG Solid-Black-Border-Curved Single-Article-Page-Keyword">{keyword.word}</p>
    })

  return (
      <div className="Solid-Black-Border-Curved Single-Article-Page-Article">
        <h3 className="Single-Article-Page-Article-Headline">{this.state.article.headline}</h3>
        <h5 className="Single-Article-Page-Article-Author">By {this.state.article.author}</h5>
        <p className="Single-Article-Page-Article-Content">{this.state.article.content}</p>
        <img className="Single-Article-Page-Article-Image" src={this.state.article.imageurl}/>
        <p>{this.state.article.date.getDate()}/{this.state.article.date.getMonth()}/{this.state.article.date.getFullYear()}</p>
        <div className="Single-Article-Page-Article-Keywords">
          {keywords}
        </div>

      </div>
    )
  }
}

export default SingleArticle;
