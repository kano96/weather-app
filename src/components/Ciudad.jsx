import React from 'react'
import styles from './Ciudad.module.css'

function Ciudad({city}) {
    return (
        <div className={styles.ciudadsection}>
            <div className={styles.container}>
                <h2 className={styles.name}>{city.name}</h2>
                <img src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} className={styles.icon} alt="icono del clima" width="50px"/>
                <div className={styles.info}>
                    <div>Temperatura: {city.temp}°C</div>
                    <div>Clima: {city.weather}</div>
                    <div>Viento: {city.wind}km/h</div>
                    <div>Cantidad de nubes: {city.clouds}</div>
                    <div>Latitud: {city.latitud}°</div>
                    <div>Longitud: {city.longitud}°</div>
                </div>
            </div>
        </div>
    )
}

export default Ciudad
