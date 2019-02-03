import React, { Component } from 'react';
import Header from '../components/Header';
import ArticleList from '../components/ArticleList';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

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
          imageurl:"https://codeclan.com/wp-content/uploads/2018/12/leaflets-09-1.png",
          date: new Date(2019, 1, 2)
        },
        {
          id: 2,
          headline:"Free Pizza in the Communal Area",
          author:"Tony Goncalves",
          content:"Hey everyone, I've organised a social or educational event which will enhance your learning experience. Join me at the big high table for pizza and other unspecified activities at a time and date that I will release to you later!",
          keywords:["Pizza","Social"],
          imageurl:"https://codeclan.com/wp-content/uploads/2018/12/leaflets-09-1.png",
          date: new Date(2019, 1, 31)
        },
        {
          id: 3,
          headline:"E26 Students Desperately Appeal to CodeClan Partners Begging for Employment",
          author:"Catriona Ford",
          content:"We're about to be released from the nurturing environment of the CodeClan playplen. Please give us interesting projects and pay us all the moneys for them. We will accept no less than three jelly laces and a button per month's employment.",
          keywords:["E26","Employer Partners","Moneys"],
          imageurl:"https://codeclan.com/wp-content/uploads/2018/12/leaflets-09-1.png",
          date: new Date(2019, 2, 15)
        },
        {
          id: 4,
          headline:"React List Items Can Be Ordered By Sorting Array Items Prior To Mapping",
          author:"Catriona Ford",
          content:"After freaking out reading a stack overflow entry including the words 'First of all, you should know that is is nearly impossible to process react components - this includes sorting them as well.', this reporter realised with the help of some further googling that the array used to make the React elements could be ordered by date, before mapping them into the React elements. This story with it's ancient date-tag was written to test if sorting the array before mapping, resulted in the articles being displayed on a different order on the web page, than here in the diddy data.",
          keywords:["Testing","Googling","React","KeepItSimpleStupid"],
          imageurl:"https://codeclan.com/wp-content/uploads/2018/12/leaflets-09-1.png",
          date: new Date(2009, 1, 2)
        },
        {
          id: 5,
          headline:"Skeptical Newbie React Developer Creates Second News Article to Document Further Date Ordering Testing",
          author:"Catriona Ford",
          content:"Having established that my article dated 2009 had shot straight to the top of my list of articles, to make sure this wasn't a fluke, and disatisfied with my super-scientific sample size of 1, I decided to add an article to the array dated in between two of the earlier articles to make sure it ended up somewhere in the middle of the list. It also occured to me in the process of writing this stream of concious waffling, that it would make more sense for the articles to be ordered by newest first rather than oldest. Guess what my next test if going to be! Can't wait > =0!",
          keywords:["Testing","Googling","React","KeepItSimpleStupid"],
          imageurl:"https://codeclan.com/wp-content/uploads/2018/12/leaflets-09-1.png",
          date: new Date(2019, 1, 8)
        },
        {
          id: 6,
          headline:"This article is dated the 25th of September 2050 and should be at the TOP of the list",
          author:"Catriona Ford",
          content:"If I've sucessfully flipped from ordered oldest to newest, to ordered newest to oldest, this should be the First article!",
          keywords:["Testing","Googling","React","KeepItSimpleStupid"],
          imageurl:"https://codeclan.com/wp-content/uploads/2018/12/leaflets-09-1.png",
          date: new Date(2050, 8, 25)
        },
        {
          id: 7,
          headline:"This article is dated the 17th of December 1980 and should be at the Bottom of the list",
          author:"Catriona Ford",
          content:"If I've sucessfully flipped from ordered oldest to newest, to ordered newest to oldest, this should be the Last article!",
          keywords:["Testing","Googling","React","KeepItSimpleStupid"],
          imageurl:"https://codeclan.com/wp-content/uploads/2018/12/leaflets-09-1.png",
          date: new Date(1980, 11, 17)
        }
      ]
    }
  }

  render(){
    return (
      <div className='article-list-container'>
      <Header title='CodeNews'/>
      <NavBar/>
      <ArticleList articles={this.state.articles} />
      <Footer />
      </div>
    )
  }

}

export default ArticleListContainer;
