import React, { Component } from 'react';
import ArticleLinkList from '../components/landing-page/ArticleLinkList';
import '../styles/LandingPage.css';

class ArticleLinkListContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
    };
  }

  render(){
    return (
      <div>
      <ArticleLinkList articles={this.props.articles}/>
      </div>
    )
  }

}

export default ArticleLinkListContainer;
