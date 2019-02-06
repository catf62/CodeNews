import React, {Component} from 'react';
import SingleArticle from '../components/single-article-page/SingleArticle';
import Header from '../components/general/Header';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';
import '../styles/SingleArticlePage.css';
import Request from '../components/helpers/Request.js';

class ArticleContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      article: {},
      author: {},
      keywords: []
    }
  }

  componentWillMount(){
    let request = new Request();

    request.get('/api/articles/'+this.props.id)
    .then(data => {
      this.setState(
        {article: data,
        author: data._embedded.author
      }
      )
    }
  )

  request.get('/api/articles/'+this.props.id+'/keywords').then(data => {
    this.setState(
      { keywords: data._embedded.keywords.map((keyword) => {
        return keyword.word;
      })
    })
    })
  }

render(){
  return(
    <div>
    <SingleArticle id={this.props.id} article={this.state.article} author={this.state.author} keywords={this.state.keywords}/>
    </div>
  )
}

}

export default ArticleContainer;
