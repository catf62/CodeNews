import React, {Component} from 'react';
import SingleArticle from '../components/single-article-page/SingleArticle';
import Header from '../components/general/Header';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';
import '../styles/SingleArticlePage.css';

class ArticleContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      article: props.article
    }
  }

render(){
  return(
    <div>
      <SingleArticle article={this.state.article}/>
    </div>
  )
}

}

export default ArticleContainer;
