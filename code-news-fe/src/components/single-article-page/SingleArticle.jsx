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
  return (
      <div className="Solid-Black-Border-Curved Article">

        <h3 className="Article-Headline">{this.state.article.headline}</h3>
        <h5 className="Article-Author">By {this.state.article.author}</h5>
        <p className="Article-Content">{this.state.article.content}</p>
        <img src={this.state.article.imageurl}/>
        <p>{this.state.article.date.getDate()}/{this.state.article.date.getMonth()}/{this.state.article.date.getFullYear()}</p>
        <div className="Article-Keywords">
          {this.state.article.keywords}
        </div>

      </div>
    )
  }
}

export default SingleArticle;
