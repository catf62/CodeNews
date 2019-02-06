import React, { Component } from 'react';
import Header from '../components/general/Header';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';
import Request from '../components/helpers/Request.js'


class NewArticleContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headline: "",
      date: "",
      author: "",
      content: "",
      imageurl: "",
      keywords: []
    }

    this.headlineKeyUp = this.headlineKeyUp.bind(this);
    this.dateOnChange = this.dateOnChange.bind(this);
    this.authorKeyUp = this.authorKeyUp.bind(this);
    this.contentKeyUp = this.contentKeyUp.bind(this);
    this.imageurlKeyUp = this.imageurlKeyUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.keywordsKeyUp = this.keywordsKeyUp.bind(this);
    this.postKeywords = this.postKeywords.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const newArticle = {
      headline: this.state.headline,
      date: this.state.date,
      author: this.state.author,
      content: this.state.content,
      imageUrl: this.state.imageurl
    }

    const request = new Request();
    request.post('/api/articles', newArticle)
      .then(data => {
        const articlePath = data._links.self.href;
        const keywordsArray = this.state.keywords;
        this.postKeywords(keywordsArray, articlePath);
      })
      // .then (() => {
      //   window.location = '/'
      // })

  }

  postKeywords(keyWordsArray, articlePath) {
    const request = new Request();
    keyWordsArray.forEach((keyword) => {
      const keywordObj = {
        word: keyword,
        article: articlePath
      }
      request.post('/api/keywords', keywordObj)
    })
  }

  headlineKeyUp(event) {
    console.log(this.state);
  this.setState({
    headline: event.target.value
  });
  }

  dateOnChange(event) {
    const capturedDate = event.target.value;
    this.setState({
      date: capturedDate.slice(8, 10) + "/" + capturedDate.slice(5, 7) + "/" + capturedDate.slice(0, 4)
    });
    }

  authorKeyUp(event) {
    console.log(this.state);
  this.setState({
    author: "/api/authors/" + event.target.value
  });
  }

  contentKeyUp(event) {
    console.log(this.state);
  this.setState({
    content: event.target.value
  });
  }

  imageurlKeyUp(event) {
    console.log(this.state);
  this.setState({
    imageurl: event.target.value
  });
  }

  keywordsKeyUp (event){
    console.log(this.state);
    const keywordsArray = event.target.value.split(",");
    this.setState ({
        keywords: keywordsArray
      })
      console.log(keywordsArray);
    }

  render(){

    const options = this.props.authors.map((author , index) => {
      return <option key={index} value={author.id} >{author.name}</option>
    })

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Headline">Headline</label>
          <input onKeyUp={this.headlineKeyUp} type="text" id="Headline"/>
          <label htmlFor="Date">Date</label>
          <input onChange={this.dateOnChange} type="date" id="Date"/>

          <label htmlFor="Author">Author</label>
          <select onChange={this.authorKeyUp} id="Author">{options}</select>

          <label htmlFor="Content">Content</label>
          <input onKeyUp={this.contentKeyUp}  type="text" id="Content"/>
          <label htmlFor="Image url">Image url</label>
          <input onKeyUp={this.imageurlKeyUp} type="text" id="Image url"/>
          <label htmlFor="Keywords">Keywords</label>
          <input onKeyUp={this.keywordsKeyUp}type="text" id="Keywords"/>
          <input type="submit" value="Save"/>
        </form>
      </div>
    )
  }
}

export default NewArticleContainer;
