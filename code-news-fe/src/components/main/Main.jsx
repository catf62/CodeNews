import React, { Component, Fragment } from 'react';
import ArticleLinkListContainer from '../../containers/ArticleLinkListContainer';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <Router>
      <Fragment>
      <Route exact path="/" component={ArticleLinkListContainer}/>
      </Fragment>
      </Router>
    )
  }
}

export default Main;
