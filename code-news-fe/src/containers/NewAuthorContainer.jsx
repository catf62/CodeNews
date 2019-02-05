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
    this.nameKeyUp = this.nameKeyUp.bind(this);
  }

  nameKeyUp(event) {
    console.log(this.state);
  this.setState({
    name: event.target.value
  });
  }

  render(){
    return (
      <div>
        <form>
          <label htmlFor="Name">Author Name</label>
          <input onKeyUp={this.nameKeyUp} type="text" id="Name"/>
          <input type="submit" value="Save"/>
        </form>
      </div>
    )
  }
}

export default NewAuthorContainer;
