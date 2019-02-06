import React, { Component } from 'react';
import Header from '../components/general/Header';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';
import Request from '../components/helpers/Request.js'
import '../styles/AddNewArticle.css';


class EditArticleContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.article.id,
      headline: props.article.headline,
      date: this.replaceDate(),
      author: props.article.author.id,
      content: props.article.content,
      imageurl: props.article.imageUrl,
      keywords: this.formatKeyWords()
    }

    this.headlineKeyUp = this.headlineKeyUp.bind(this);
    this.dateOnChange = this.dateOnChange.bind(this);
    this.authorKeyUp = this.authorKeyUp.bind(this);
    this.contentKeyUp = this.contentKeyUp.bind(this);
    this.imageurlKeyUp = this.imageurlKeyUp.bind(this);
    this.keywordsKeyUp = this.keywordsKeyUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateKeywords = this.updateKeywords.bind(this);
    this.dateForDatabase = this.dateForDatabase.bind(this);
    this.postKeywords = this.postKeywords.bind(this);

  }

  handleSubmit(event){
    event.preventDefault();
    const newArticle = {
      headline: this.state.headline,
      date: this.dateForDatabase(this.state.date),
      author: this.state.author,
      content: this.state.content,
      imageUrl: this.state.imageurl
    }

    const request = new Request();
    request.put('/api/articles/'+this.state.id, newArticle)
      .then(data => {
        const articlePath = data._links.self.href;
        const keywordsArray = this.state.keywords;
        this.updateKeywords(keywordsArray, articlePath);
      })
      // .then (() => {
      //   window.location = '/'
      // })

  }

  updateKeywords(keyWordsArray, articlePath) {
    const request = new Request();
    request.get('/api/articles/' + this.state.id + '/keywords')
      .then((data) => {
        console.log("data from req: ", data);
        const oldKeywords = data._embedded.keywords;
        const oldKeywordIds = oldKeywords.map((keyword) => {
          return keyword._links.self.href.split('keywords/')[1];
        })
        console.log("links: ", oldKeywordIds);
        oldKeywordIds.forEach((oldId) => {
          request.delete('/api/keywords/' + oldId);
        })
        return data;
      })
      .then((data) => {
        this.postKeywords(keyWordsArray, articlePath);
      })
    // console.log("keyWordsArray from handleSubmit: ", keyWordsArray);
    // console.log("keyWordsFromProps: ", this.props.article.keywords);
    // console.log("keyWordIds: ", keywordIds);
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

  replaceDate() {
    const year = this.props.article.datePosted.getFullYear()

    let day = this.props.article.datePosted.getDate().toString();
    if (this.props.article.datePosted.getDate() < 10) {
      day = ("0" + day).slice(-2);
    }

    let month = (this.props.article.datePosted.getMonth() + 1).toString();
    if (this.props.article.datePosted.getMonth() < 10) {
      month = ("0" + month).slice(-2);
    }
    const date = year+'-'+month+'-'+day;
    return date;
  }

  headlineKeyUp(event) {
    console.log(this.state);
  this.setState({
    headline: event.target.value
  });
  }

  dateOnChange(event) {
    this.setState({
      date: event.target.value
    });
    }

  dateForDatabase(date) {
    let capturedDate = date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
    return capturedDate;
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

  formatKeyWords(){
    let formattedKeyWords = ""
    for (const keyWord of this.props.article.keywords){
      formattedKeyWords += keyWord.word + ","
    }
    return formattedKeyWords
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
      let option = null
      if (author.id === this.state.author) {
        option = <option key={index} selected value={author.id} >{author.name}</option>
      } else if (author.id !== this.state.author)
      {
        option = <option key={index}  value={author.id} >{author.name}</option>
      }
      return option;
    })

    return (
      <div className="New-Article-Box">
        <div className="Form-Wrapper">
        <form className="New-Article-Form" onSubmit={this.handleSubmit}>
          <label htmlFor="Headline">Headline</label>
          <br></br>
          <input onChange={this.headlineKeyUp} type="text" id="Headline" value={this.state.headline}/>
          <br></br>
          <label htmlFor="Date">Date</label>
          <br></br>
          <input onChange={this.dateOnChange} type="date" id="Date" value={this.state.date}/>
          <br></br>
          <label htmlFor="Author">Author</label>
          <br></br>
          <select onChange={this.authorKeyUp} id="Author">{options}</select>
          <br></br>
          <label htmlFor="Content">Content</label>
          <br></br>
          <input onChange={this.contentKeyUp}  type="text" id="Content"
          value={this.state.content}/>
          <br></br>
          <label htmlFor="Image url">Image url</label>
          <br></br>
          <input onChange={this.imageurlKeyUp} type="text" id="Image url" value={this.state.imageurl}/>
          <br></br>
          <label htmlFor="Keywords">Keywords</label>
          <br></br>
          <input onChange= {this.keywordsKeyUp} type="text" id="Keywords"
          value={this.state.keywords}/>
          <br></br>
          <br></br>
          <input type="submit" value="Save"/>
        </form>
        </div>
      </div>
    )
  }
}

export default EditArticleContainer;
