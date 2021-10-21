import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import style from './cards.module.css';

export default function Cards({cities,onClose}) {
  // acá va tu código
  // tip, podés usar un map
  return <div className={style.cards_container}>
      {cities.map(c => <Card
        max={c.max}
        min={c.min}
        name={c.name}
        img={c.img}
        onClose={() => onClose(c.id)}
        id={c.id}
      /> )}
  </div>
};

Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClick: PropTypes.func 
};
