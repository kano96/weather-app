import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return <div>
    {cities.map((city) => 
      <Card 
        key = {city.id}
        min={city.main.temp_min} 
        max={city.main.temp_max} 
        name={city.name} 
        img={city.weather[0].icon} 
        onClose={()=> alert (city.name)}
    />)}
  </div>
};

Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClick: PropTypes.func 
};
