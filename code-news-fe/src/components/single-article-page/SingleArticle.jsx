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
      return <p key={index} className="Single-Article-Page-Keyword-Box">{keyword.word}</p>
    })

    let day = this.props.article.datePosted.getDate().toString();
    if (this.props.article.datePosted.getDate() < 10) {
      day = ("0" + day).slice(-2);
    }

    let month = (this.props.article.datePosted.getMonth() + 1).toString();
    if (this.props.article.datePosted.getMonth() < 10) {
      month = ("0" + month).slice(-2);
    }

  return (
      <div className="Single-Article-Page-Article">
        <div className="Single-Article-Box">

          <div className="Single-Article-Headline-And-Image-Box">
            <h3 className="Single-Article-Page-Article-Headline">{this.state.article.headline}</h3>
            <img className="Single-Article-Page-Article-Image" src={this.state.article.imageUrl}/>
          </div>

          <div className="Single-Article-Page-Author-And-Date-Box">
            <h5 className="Single-Article-Page-Article-Author">By {this.state.article.author.name}</h5>
            <p className="Single-Article-Page-Article-Date">{day}/{month}/{this.state.article.datePosted.getFullYear()}</p>
          </div>
          <br></br>

          <p className="Single-Article-Page-Article-Content">{this.state.article.content}</p>
          <br></br>
          <div className="Single-Article-Page-Article-Keywords">
            <p>Keywords: </p>
            {displayedKeywords}
          </div>
          <Link to={'/article/'+this.state.article.id+'/edit'}>
          <button className="Single-Article-Page-Button">Edit</button>
          </Link>
          <Link to={'/article/'+this.state.article.id+'/delete'}>
          <button className="Single-Article-Page-Button">Delete</button>
          </Link>
        </div>
      </div>
    )
  }
}


export default SingleArticle;
