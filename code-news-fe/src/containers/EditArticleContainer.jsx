import React, { Component } from 'react';
import Header from '../components/general/Header';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';
import Request from '../components/helpers/Request.js'


class EditArticleContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      headline: "",
      date: "",
      author: "",
      content: "",
      imageurl: "",
      keywords: ""
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

  componentWillMount(){
    let request = new Request();

    request.get('/api/articles/'+this.props.id)
    .then(data => {
      const dateObject = data.date;
      console.log(dateObject);
      this.setState(
        { id: this.props.id,
          headline: data.headline,
          date: this.replaceDate(dateObject),
          author: data._embedded.author.id,
          content: data.content,
          imageurl: data.imageUrl,
      }
      )
    }
  )

  request.get('/api/articles/'+this.props.id+'/keywords').then(data => {
    const keywords = data._embedded.keywords.map((keyword) => {
      return keyword.word+','
    }).join();

    this.setState(
      { keywords: keywords}
    )
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const newArticle = {
      headline: this.state.headline,
      date: this.dateForDatabase(this.state.date),
      author: "/api/authors/" + this.state.author,
      content: this.state.content,
      imageUrl: this.state.imageurl
    }

    const request = new Request();
    request.put('/api/articles/'+this.props.id, newArticle)
      .then(data => {
        const articlePath = data._links.self.href;
        const keywordsArray = this.state.keywords;
        this.updateKeywords(keywordsArray, articlePath);
      })
      .then (() => {
        window.location = '/'
      })
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

  replaceDate(dateObject) {
    const year = dateObject.slice(6, 10);

    let day = dateObject.slice(0, 2);

    let month = dateObject.slice(3, 5);

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
    author: event.target.value
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
      let option = null
      if (author.id === this.state.author) {
        option = <option selected="true" key={index} value={author.id} >{author.name}</option>
      } else if (author.id !== this.state.author)
      {
        option = <option key={index}  value={author.id} >{author.name}</option>
      }
      return option;
    })

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Headline">Headline</label>
          <input onChange={this.headlineKeyUp} type="text" id="Headline" value={this.state.headline}/>

          <label htmlFor="Date">Date</label>
          <input onChange={this.dateOnChange} type="date" id="Date" value={this.state.date}/>

          <label htmlFor="Author">Author</label>
          <select onChange={this.authorKeyUp} id="Author">{options}</select>

          <label htmlFor="Content">Content</label>
          <input onChange={this.contentKeyUp}  type="text" id="Content"
          value={this.state.content}/>
          <label htmlFor="Image url">Image url</label>
          <input onChange={this.imageurlKeyUp} type="text" id="Image url" value={this.state.imageurl}/>
          <label htmlFor="Keywords">Keywords</label>
          <input onChange= {this.keywordsKeyUp} type="text" id="Keywords"
          value={this.state.keywords}/>
          <input type="submit" value="Save"/>
        </form>
      </div>
    )
  }
}

export default EditArticleContainer;
