import React, {Component} from 'react';
import SingleArticle from '../components/single-article-page/SingleArticle'

class ArticleContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      article: null
    }
  }

render(){
  return(
    <SingleArticle article={this.state.article}/>
  )
}

}

export default ArticleContainer;
