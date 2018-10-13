import React from 'react';
import './Nav.css';
import RedditLogo from '../Icons/RedditLogo'
import RedditText from '../Icons/RedditText'

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>   
        <RedditLogo />
        <RedditText />
      </div>
    </div>
  );
};

export default Nav;