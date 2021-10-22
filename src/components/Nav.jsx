import React from 'react';
import Logo from '../clima.png'
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <div className={styles.nav}>
      <Link to='/'>
        <div className={styles.title}>
          <img src={Logo} alt="climalogo" id='logoHenry' width='50px'/>
          <h4>Weather App</h4>
        </div>
      </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
