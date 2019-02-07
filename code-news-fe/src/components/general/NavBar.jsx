import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
      <div className='Solid-Black-Border NavBar'>
      <Link to={'/admin'}>
      <button className="Lighter-Blue-BG Solid-Black-Border-Curved NavBar-Button">Admin</button>
      </Link>
      <Link to={'/'}>
      <button className="Lighter-Blue-BG Solid-Black-Border-Curved NavBar-Button">Home</button>
      </Link>
      </div>
    )
  }

}

export default NavBar;
