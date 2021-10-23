import React from 'react';
import styles from './about.module.css'

function About() {
    return (
        <div className={styles.aboutsection}>
            <div className={styles.aboutcontainer}>
                <div className={styles.title}>
                    <h3>About Weather Application</h3>
                </div>
                <div className={styles.desc}>
                    <p>
                        This application was created with React.js, 
                        it takes the data from OpenWeather API and
                        show it when you add a city from the search
                        bar in the navigation bar. This project is 
                        part of the 'Soy Henry' bootcamp. Hope you 
                        enjoy it!
                    </p>
                    <span>By: Kevin Torres</span>
                </div>
            </div>
        </div>
    )
}

export default About
