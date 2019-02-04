import React, { Component } from 'react';
import Header from '../components/general/Header';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';

class NewAuthorContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  render(){
    return (
      <div>
        <Header/>
        <NavBar/>
        <form>
          <label htmlFor="Name">Author Name</label>
          <input type="text" value={this.state.name} id="Name"/>
          <input type="submit" value="Save"/>
        </form>
        <Footer/>
      </div>
    )
  }
}

export default NewAuthorContainer;
