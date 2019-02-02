import React, { Component } from 'react';
import Article from './Article.jsx';

class ArticleList extends Component {

  render() {
    const articleItems = this.props.articles.map((article) => {
      return (
        <Article article={article} key={article.id}/>
      );
    });
    return (
      <div className='article-list'>
        <ul>
          {articleItems}
        </ul>
      </div>
    );
  }

}

export default ArticleList;
