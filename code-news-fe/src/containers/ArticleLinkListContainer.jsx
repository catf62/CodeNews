import React, { Component } from 'react';
import Header from '../components/general/Header';
import ArticleLinkList from '../components/landing-page/ArticleLinkList';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';
import '../styles/LandingPage.css';

class ArticleLinkListContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
    };
    this.handleArticleLinkClick = this.handleArticleLinkClick.bind(this);
  }

  handleArticleLinkClick(id){
    this.props.handleArticleLinkClick(id);
  }

  render(){
    return (
      <div>
      <Header/>
      <NavBar/>
      <ArticleLinkList articles={this.props.articles} handleArticleLinkClick={this.handleArticleLinkClick}/>
      <Footer />
      </div>
    )
  }

}

export default ArticleLinkListContainer;
