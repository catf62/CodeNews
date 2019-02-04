import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticleLink extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.id
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleArticleLinkClick(this.state.id);
  }

  render() {
    const keywords = this.props.article.keywords.map((keyword, index) => {
      return <p key={index} className="Medium-Blue-BG Solid-Black-Border-Curved Landing-Page-Keyword">{keyword}</p>
    })

    // console.log(this.props.article.date);
    const dateString = this.props.article.date;
    const yearString = dateString.slice(0, 4);
    const monthString = dateString.slice(5, 7);
    const dayString = dateString.slice(8,10);
    // console.log(yearString);
    // console.log(monthString);
    // console.log(dayString);

    // Was replaced when the data was imported since it comes as a string.

    // let day = this.props.article.date.getDate().toString();
    // if (this.props.article.date.getDate() < 10) {
    //   day = ("0" + day).slice(-2);
    // }
    //
    // let month = (this.props.article.date.getMonth() + 1).toString();
    // if (this.props.article.date.getMonth() < 10) {
    //   month = ("0" + month).slice(-2);
    // }

    return (
      <div className="Solid-Black-Border-Curved Landing-Page-Article" id={this.state.id}>
      <h3 className="Landing-Page-Article-Headline">{this.props.article.headline}</h3>
      <h5 className="Landing-Page-Article-Author">By {this.props.article.author.name}</h5>
      <p className="Landing-Page-Article-Content">{this.props.article.content.slice(0, 150) + "..."}</p>
      <p>{dayString}/{monthString}/{yearString}</p>
      <div className="Landing-Page-Article-Keywords">
      {keywords}
      </div>
      <Link to={'/article/'+this.state.id}>
      <button className="Solid-Black-Border-Curved Landing-Page-Read-More-Button" onClick={this.handleClick}>READ MORE!!!</button>
      </Link>
      </div>
    );
  }
}

export default ArticleLink;
