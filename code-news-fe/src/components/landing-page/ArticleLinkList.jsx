import React, { Component } from 'react';
import ArticleLink from './ArticleLink.jsx';

class ArticleLinkList extends Component {

  constructor(props){
    super(props);
    this.state = {};
    this.handleArticleLinkClick = this.handleArticleLinkClick.bind(this);
    }

  handleArticleLinkClick(id){
    this.props.handleArticleLinkClick(id);
  }

  //TODO: change 'date to datePosted here to fix the sorting'

  render() {
    const unorderedArticleItems = this.props.articles;
    unorderedArticleItems.sort((article1, article2) => article2.date - article1.date);
    const articleItems = unorderedArticleItems.map((article) => {
        return (
          <ArticleLink article={article} key={article.id} id={article.id} handleArticleLinkClick={this.handleArticleLinkClick}/>
        );
      });
      return (
        <div>
        <ul className='Lighter-Blue-BG Landing-Page-Article-List'>
        {articleItems}
        </ul>
        </div>
      );
    }

  }

  export default ArticleLinkList;
