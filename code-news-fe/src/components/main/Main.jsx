import React, { Component, Fragment } from 'react';
import ArticleLinkListContainer from '../../containers/ArticleLinkListContainer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ArticleContainer from '../../containers/ArticleContainer'


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
      <Switch>
      <Route exact path="/" component={ArticleLinkListContainer}/>
      <Route exact path="/article/:id" render={(props) => {
        const id = props.match.params.id
        return <ArticleContainer id={id} />
      }}/>
      </Switch>
      </Fragment>
      </Router>
    )
  }
}

export default Main;
