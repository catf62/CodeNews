import React, { Component } from 'react';

class ArticleListContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: [
        {
          id: 1,
          headline:"Scotland's Award Winning Digital Skills Academy Launches News Site",
          author:"Catriona Ford",
          content:"In pants wettingly exciting development, CodeClan Edinburgh has launched a fresh and informative news website, aimed at students, staff and alumni. An intrepid band of E26 students have taken the initiative to build the web application using skills learned at CodeClan.",
          keywords:["News","E26","Students"],
          imageurl:"https://codeclan.com/",
          date: new Date(2019, 01, 02)
        },
        {
          id: 2,
          headline:"Free Pizza in the Communal Area",
          author:"Tony Goncalves",
          content:"Hey everyone, I've organised a social or educational event which will enhance your learning experience. Join me at the big high table for pizza and other unspecified activities at a time and date that I will release to you later!",
          keywords:["Pizza","Social"],
          imageurl:"https://codeclan.com/events/",
          date: new Date(2019, 00, 31)
        },
        {
          id: 3,
          headline:"E26 Students Desperately Appeal to CodeClan Partners Begging for Employment",
          author:"Catriona Ford",
          content:"We're about to be released from the nurturing environment of the CodeClan playplen. Please give us interesting projects and pay us all the moneys for them. We will accept no less than three jelly laces and a button per month's employment.",
          keywords:["E26","Employer Partners","Moneys"],
          imageurl:"https://codeclan.com/for-employers/",
          date: new Date(2019, 02, 15)
        }
      ]
    }
  }

  render(){
    return (
      <div className='article-list-container'>
      <Header title='CodeNews - Fake news never looked so hacked together...'/>
      <ArticleList articles={this.state.articles} />
    )
  }

}
