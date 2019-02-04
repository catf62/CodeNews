import React, { Component } from 'react';
import Header from '../components/general/Header';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';

class AdminContainer extends Component{
  constructor(props) {
super(props);
  }

  render(){
    return(
      <div>
      <Header />
      <NavBar />
      <div>
      <p>Insert Elements Here</p>
      </div>
      <Footer/>
      </div>
    )
  }
}

export default AdminContainer;
