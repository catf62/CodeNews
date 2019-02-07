import React from 'react';
import { Link } from 'react-router-dom';

const BadRouteContainer = () => {
  return(
    <div className="New-Article-Box">
    <div className="Form-Wrapper">
    <div className="New-Article-Form">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <p>We have news for you...this route doesn't exist!</p>
    <br></br>
    <br></br>
    <label htmlFor="Home">Try this: </label>
    <Link to="/">
    <button className="Delete-Page-Button" id="Home">Home</button>
    </Link>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
    </div>
    </div>
  )
}

export default BadRouteContainer;
