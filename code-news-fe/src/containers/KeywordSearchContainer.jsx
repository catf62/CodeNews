import React, { Component } from 'react';
import ArticleLinkListContainer from './ArticleLinkListContainer';
import Request from '../components/helpers/Request.js';

class KeywordSearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:"",
      results: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchKeyUp = this.searchKeyUp.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let request = new Request();

    request.get('/api/articles/keyword/'+ this.state.search)
    .then(data => {
      this.createResults(data);
    })
  }

  replaceDate(dateString) {
    const day = parseInt(dateString.slice(0,2));
    //minus 1 to month as the date datatype counts month from 0 - 11.
    const month = parseInt(dateString.slice(3,5)) -1;
    const year = parseInt(dateString.slice(6,10));
    const date = new Date(year, month, day);
    return date;
  }

  createResults(data){
    this.setState(()=>{
      if(data.length > 0) {
        for(const article of data){
          article.datePosted = this.replaceDate(article.date)
        }
        return {results: <ArticleLinkListContainer key="1" articles={data} />}
      }
      else {
        const noResult = [<p key="1">There are no article matches for that keyword</p>];
        return {results: noResult}
      }
    }
  )
}

searchKeyUp(event){
  this.setState({search: event.target.value})
}


render(){
  return(
    <div>
    <form onSubmit={this.handleSubmit}>
    <label for="Keyword Search">Search By Keyword: </label>
    <input type="text" id="Keyword Search" value={this.state.search} onChange={this.searchKeyUp}/>
    </form>
    { this.state.results }
    </div>
  )
}
}

export default KeywordSearchContainer;
