import React, { Component } from 'react';
import Header from '../components/general/Header';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';


class EditArticleContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headline: props.article.headline,
      date: this.replaceDate(),
      author: props.article.author.name,
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
    const capturedDate = event.target.value;
    this.setState({
      date: capturedDate.slice(8, 10) + "/" + capturedDate.slice(5, 7) + "/" + capturedDate.slice(0, 4)
    });
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

  formatKeyWords(){
    let formattedKeyWords = ""
    for (const keyWord of this.props.article.keywords){
      formattedKeyWords += keyWord.word + ","
    }
    return formattedKeyWords
  }

  keywordsKeyUp (event){
    console.log(this.state);
  this.setState ({
      keywords: event.target.value
    })
  }


  render(){
    return (
      <div>
        <form>
          <label htmlFor="Headline">Headline</label>
          <input onChange={this.headlineKeyUp} type="text" id="Headline" value={this.state.headline}/>
          <label htmlFor="Date">Date</label>
          <input onChange={this.dateOnChange} type="date" id="Date" value={this.state.date}/>
          <label htmlFor="Author">Author</label>
          <input onChange={this.authorKeyUp} type="text" id="Author" value={this.state.author}/>
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
