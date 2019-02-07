import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminPage.css';

const AdminContainer = () => {
    return(
      <div className="Admin-Page">
          <div className="Admin-Page-Button-And-Image">
            <p className="Admin-Page-Plus">+</p>


            <Link to={'/admin/articles/new'}>
            <button className="Admin-Page-Button">Add New Article</button>
            </Link>

          </div>

          <div className="Admin-Page-Button-And-Image">
            <p className="Admin-Page-Plus">+</p>

            <Link to={'/admin/authors/new'}>
            <button className="Admin-Page-Button">Manage Authors</button>
            </Link>

          </div>
      </div>
    )
}

export default AdminContainer;
