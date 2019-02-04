import React, { Component } from 'react';
import ArticleLink from './ArticleLink.jsx';

class ArticleLinkList extends Component {

  render() {
    console.log(this.props.articles);
    const unorderedArticleItems = this.props.articles;
    unorderedArticleItems.sort((article1, article2) => article2.date - article1.date);
    const articleItems = unorderedArticleItems.map((article) => {

        return (
          <ArticleLink article={article} key={article.id}/>
        );
      });
      return (
        <div>
        <ul className='Lighter-Blue-BG Article-List'>
        {articleItems}
        </ul>
        </div>
      );
    }

  }

  export default ArticleLinkList;
