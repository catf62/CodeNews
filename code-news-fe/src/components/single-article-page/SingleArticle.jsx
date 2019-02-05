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
    const displayedKeywords =
     this.state.article.keywords.map((keyword, index) => {
      return <p key={index} className="Medium-Blue-BG Solid-Black-Border-Curved Single-Article-Page-Keyword">{keyword.word}</p>
    })

  return (
      <div className="Solid-Black-Border-Curved Single-Article-Page-Article">
        <h3 className="Single-Article-Page-Article-Headline">{this.state.article.headline}</h3>
        <h5 className="Single-Article-Page-Article-Author">By {this.state.article.author.name}</h5>
        <p className="Single-Article-Page-Article-Content">{this.state.article.content}</p>
        <img className="Single-Article-Page-Article-Image" src={this.state.article.imageUrl}/>
        <p>{this.state.article.datePosted.getDate()}/{this.state.article.datePosted.getMonth()}/{this.state.article.datePosted.getFullYear()}</p>
        <div className="Single-Article-Page-Article-Keywords">
          {displayedKeywords}
        </div>
      </div>
    )
  }
}


export default SingleArticle;
