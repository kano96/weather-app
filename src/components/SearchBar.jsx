import React from 'react';
import style from './search.module.css'
export default function SearchBar({onSearch}) {
  // acá va tu código
  function handleOnSearch(){
    if(typeof onSearch === "function"){
      const input = document.getElementById("search-bar-input")
      onSearch(input.value);
    }
  }
  return <div className={style.searchContainer}>
    <input id='search-bar-input' type="text" className={style.agregarinp} placeholder='Ciudad...'/>
    <button onClick={handleOnSearch} className={style.agregarbut}>Agregar</button>
  </div>
};   