import React, { Component } from 'react';
import Header from '../components/general/Header';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';
import { Link } from 'react-router-dom';

class AdminContainer extends Component{
  constructor(props) {
super(props);
  }

  render(){
    return(
      <div>
      <div>
      <Link to={'/admin/article/new'}>
      <button>Add New Article</button>
      </Link>
      <Link to={'/admin/author/new'}>
      <button>Manage Authors</button>
      </Link>
      </div>
      </div>
    )
  }
}

export default AdminContainer;
