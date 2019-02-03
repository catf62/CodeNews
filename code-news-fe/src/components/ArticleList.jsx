import React, { Component } from 'react';
import Article from './Article.jsx';

class ArticleList extends Component {

  render() {
    console.log(this.props.articles);
    const unorderedArticleItems = this.props.articles;
    unorderedArticleItems.sort((article1, article2) => article2.date - article1.date);
    const articleItems = unorderedArticleItems.map((article) => {

    // var obj = [...this.state.data];
    // obj.sort((a,b) => a.timeM - b.timeM);
    // obj.map((item, i) => (<div key={i}> {item.matchID}
    //   {item.timeM} {item.description}</div>))
    //
    //   const articleItems = this.props.articles.map((article) => {
        return (
          <Article article={article} key={article.id}/>
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

  export default ArticleList;
