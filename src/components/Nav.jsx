import React from 'react';
import Logo from '../clima.png'
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css';

function Nav({onSearch}) {
  return (
    <div className={styles.nav}>
      <div className={styles.title}>
        <img src={Logo} alt="climalogo" id='logoHenry' width='50px'/>
        <h4>Weather App</h4>
      </div>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
