import React, { Component } from 'react';

class NewAuthorContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  render(){
    return (
      <form>
        <label htmlFor="Name">Author Name</label>
        <input type="text" value={this.state.name} id="Name"/>
        <input type="submit" value="Save"/>
      </form>
    )
  }
}

export default NewAuthorContainer;
