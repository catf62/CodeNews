import React, { Component } from 'react';
import Header from '../components/general/Header';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';


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
  }

  headlineKeyUp(event) {
    console.log(this.state);
  this.setState({
    headline: event.target.value
  });
  }


  render(){
    return (
      <div>
        <Header/>
        <NavBar/>
        <form>
          <label htmlFor="Headline">Headline</label>
          <input onKeyUp={this.headlineKeyUp} type="text" id="Headline"/>
          <label htmlFor="Date">Date</label>
          <input type="date" id="Date"/>
          <label htmlFor="Author">Author</label>
          <input type="text" id="Author"/>
          <label htmlFor="Content">Content</label>
          <input type="text" id="Content"/>
          <label htmlFor="Image url">Image url</label>
          <input type="text" id="Image url"/>
          <label htmlFor="Keywords">Keywords</label>
          <input type="text" id="Keywords"/>
          <input type="submit" value="Save"/>
        </form>
        <Footer/>
      </div>
    )
  }
}

export default NewArticleContainer;
