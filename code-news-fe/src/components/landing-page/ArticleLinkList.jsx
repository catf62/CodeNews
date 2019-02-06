import React, { Component } from 'react';
import ArticleLink from './ArticleLink.jsx';

class ArticleLinkList extends Component {

  constructor(props){
    super(props);
    this.state = {};
    }

  render() {
    const unorderedArticleItems = this.props.articles;
    unorderedArticleItems.sort((article1, article2) => article2.datePosted - article1.datePosted);
    const articleItems = unorderedArticleItems.map((article) => {
        return (
          <ArticleLink article={article} key={article.id} id={article.id}/>
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
