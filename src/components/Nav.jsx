import React from 'react';
import Logo from '../clima.png'
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <div className={styles.nav}>
      <div className={styles.title}>
        <Link to='/' >
          <img src={Logo} alt="climalogo" id='logoHenry' width='50px'/>
        </Link>
        <Link to='/' style={{color: 'inherit',textDecoration:'none'}}>
          <h4>Weather App</h4>
        </Link>
        <Link to='/about' style={{color: 'inherit',textDecoration:'none'}}>
          <span className={styles.about}>About</span>
        </Link>
      </div>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
