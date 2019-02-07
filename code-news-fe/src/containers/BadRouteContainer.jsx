import React from 'react';
import { Link } from 'react-router-dom';

const BadRouteContainer = () => {
  return(
    <div>
    <p>We have news for you...this route doesn't exist!</p>
    <label htmlFor="Home">Try this: </label>
    <Link to="/">
    <button id="Home">Click here to go to Home</button>
    </Link>
    </div>
  )
}

export default BadRouteContainer;
