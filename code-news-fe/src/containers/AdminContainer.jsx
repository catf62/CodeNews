import React, { Component } from 'react';
import Header from '../components/general/Header';
import NavBar from '../components/general/NavBar';
import Footer from '../components/general/Footer';
import { Link } from 'react-router-dom';
import '../styles/AdminPage.css';

class AdminContainer extends Component{
  constructor(props) {
super(props);
  }

  render(){
    return(
      <div className="Admin-Page">
          <div className="Admin-Page-Button-And-Image">
            <p className="Admin-Page-Plus">+</p>


            <Link to={'/admin/article/new'}>
            <button className="Admin-Page-Button">Add New Article</button>
            </Link>

          </div>

          <div className="Admin-Page-Button-And-Image">
            <p className="Admin-Page-Plus">+</p>

            <Link to={'/admin/author/new'}>
            <button className="Admin-Page-Button">Manage Authors</button>
            </Link>

          </div>
      </div>
    )
  }
}

export default AdminContainer;
