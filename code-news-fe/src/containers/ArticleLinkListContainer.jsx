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

    }
  }

  render(){
    return (
      <div className='article-list-container'>
      <Header title='odeNews'/>
      <NavBar/>
      <ArticleLinkList articles={this.props.articles} />
      <Footer />
      </div>
    )
  }

}

export default ArticleLinkListContainer;
