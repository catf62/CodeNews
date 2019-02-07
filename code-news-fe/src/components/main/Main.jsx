import React, { Component, Fragment } from 'react';
import ArticleLinkListContainer from '../../containers/ArticleLinkListContainer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ArticleContainer from '../../containers/ArticleContainer';
import AdminContainer from '../../containers/AdminContainer';
import NewArticleContainer from '../../containers/NewArticleContainer';
import NewAuthorContainer from '../../containers/NewAuthorContainer';
import Request from '../helpers/Request.js';
import Header from '../general/Header.jsx';
import NavBar from '../general/NavBar.jsx';
import Footer from '../general/Footer.jsx';
import EditArticleContainer from '../../containers/EditArticleContainer.jsx';
import DeleteArticleContainer from '../../containers/DeleteArticleContainer.jsx';
import DeleteAuthorContainer from '../../containers/DeleteAuthorContainer.jsx';
import EditAuthorContainer from '../../containers/EditAuthorContainer.jsx';
import KeywordSearchContainer from '../../containers/KeywordSearchContainer.jsx';

class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      authors: [],
    }
  }

  replaceDate(dateString) {
    const day = parseInt(dateString.slice(0,2));
    //minus 1 to month as the date datatype counts month from 0 - 11.
    const month = parseInt(dateString.slice(3,5)) -1;
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
    request.get('/api/authors').then(data => {
      this.setState({authors: data._embedded.authors})
    })
  }

  render(){
    return (
      <Router>
      <Fragment>
      <Header/>
      <NavBar/>
      <Fragment>
      <Switch>
      <Route exact path="/" render={(props) => {
        const articles = this.state.articles;
        return (
          <>
          <KeywordSearchContainer/>
          <ArticleLinkListContainer articles={articles}/>
          </>
        )
      }}/>
      <Route exact path="/articles/:id" render={(props) => {
        const id = props.match.params.id;
        return <ArticleContainer id={id}/>
      }}/>
      <Route exact path="/admin" render={(props) => {
        return <AdminContainer />
      }}/>
      <Route exact path="/admin/articles/new" render={(props) => {
        return <NewArticleContainer authors={this.state.authors}/>
      }}/>
      <Route exact path="/admin/authors/new" render={(props) => {
        return <NewAuthorContainer authors={this.state.authors}/>
      }}/>
      <Route exact path="/articles/:id/edit" render={(props) => {
        const id = props.match.params.id;
        return <EditArticleContainer id={id} authors={this.state.authors}/>
      }}/>
      <Route exact path="/articles/:id/delete" render={(props) => {
        const id = props.match.params.id;
        return <DeleteArticleContainer id={id}/>
      }}/>
      <Route exact path="/authors/:id/delete" render={(props) => {
        const id = props.match.params.id;
        return <DeleteAuthorContainer id={id}/>
      }}/>
      <Route exact path="/authors/:id/edit" render={(props) => {
        const id = props.match.params.id;
        return <EditAuthorContainer id={id}/>
      }}/>
      </Switch>
      </Fragment>
      <Footer/>
      </Fragment>
      </Router>
    )
  }
}

export default Main;
