import React, { Component, Fragment } from 'react';
import ArticleLinkListContainer from '../../containers/ArticleLinkListContainer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ArticleContainer from '../../containers/ArticleContainer';
import AdminContainer from '../../containers/AdminContainer';
import NewArticleContainer from '../../containers/NewArticleContainer';
import NewAuthorContainer from '../../containers/NewAuthorContainer';
import Request from '../helpers/Request.js';

class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      currentArticle: null
    }
    this.handleArticleLinkClick = this.handleArticleLinkClick.bind(this);
  }

  replaceDate(dateString) {
    const day = parseInt(dateString.slice(0,2));
    const month = parseInt(dateString.slice(3,5));
    const year = parseInt(dateString.slice(6,10));
    const date= new Date(year, month, day);
    return date;
  }

  componentDidMount(){
  let request = new Request()
  request.get('/api/articles').then(data => {
    const articleData = data._embedded.articles;
    for (const art of articleData) {
      art.datePosted = this.replaceDate(art.datePosted)
    }

    this.setState({articles: data._embedded.articles})
  })
}

  handleArticleLinkClick(id){
    this.setState(() => {
      let currentArticle = null;
      for(const article of this.state.articles) {
        if (article.id === id){
          currentArticle = article;
          break;
        }
      }
      return({currentArticle: currentArticle})
    })
  }

  render(){
    return (
      <Router>
      <Fragment>
      <Switch>
      <Route exact path="/" render={(props) => {
        const articles = this.state.articles;
        // console.log("articles", articles);
        // console.log("date", articles[0]);
        return <ArticleLinkListContainer articles={articles} handleArticleLinkClick={this.handleArticleLinkClick}/>
      }}/>
      <Route exact path="/article/:id" render={(props) => {
        const id = props.match.params.id
        return <ArticleContainer id={id} article={this.state.currentArticle}/>
      }}/>
      <Route exact path="/admin" render={(props) => {
        return <AdminContainer />
      }}/>
      <Route exact path="/admin/article/new" render={(props) => {
        return <NewArticleContainer/>
      }}/>
      <Route exact path="/admin/author/new" render={(props) => {
        return <NewAuthorContainer/>
      }}/>
      </Switch>
      </Fragment>
      </Router>
    )
  }
}

export default Main;
