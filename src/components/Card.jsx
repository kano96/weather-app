import React from 'react';
import CardTemp from './CardTemp';
import styles from './Card.module.css'



export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  function handleOnClose(){
    if(typeof onClose === "function") onClose();
  }
  return <div className={styles.cardContainer}>
    <button onClick={handleOnClose} className={styles.button}>x</button>
    <span className={styles.city}>{name}</span>
    <CardTemp label="Min" value={min}/>
    <CardTemp label="Max" value={max}/>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} className={styles.icon} alt="icono del clima" width="50px"/>
  </div>
};
