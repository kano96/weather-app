import React, { useState } from 'react';
import style from './search.module.css'
export default function SearchBar({onSearch}) {
  // acá va tu código
  const [city, setCity] = useState("");
  const handleInputChange = (e) => {
    e.preventDefault();
    setCity(e.target.value); 
  }
  return (
    <form className={style.searchContainer} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      const input = document.getElementById("search-input");
      input.value = "";
    }}>
      <input
        type="text"
        placeholder="Ciudad"
        className={style.agregarinp}
        onChange={(e)=>handleInputChange(e)}
        id="search-input"
      />
      <input type="submit" className={style.agregarbut} value="Agregar" />
    </form>
  )
};   