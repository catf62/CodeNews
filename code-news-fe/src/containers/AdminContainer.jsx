import React from 'react';
import { Link } from 'react-router-dom';

const AdminContainer = () => {
    return(
      <div>
      <div>
      <Link to={'/admin/articles/new'}>
      <button>Add New Article</button>
      </Link>
      <Link to={'/admin/authors/new'}>
      <button>Manage Authors</button>
      </Link>
      </div>
      </div>
    )
  }

export default AdminContainer;
