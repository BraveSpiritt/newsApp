import React from 'react'
import styles from './About.module.css'

const About = () => {
    return (

        <div className={styles.parnetDiv}>
            <div className={styles.imageDiv}>
                <img style={{ marginTop: '150px', maxWidth: '80%' }} src={require('./about.jpg')} />

            </div>
            <div className={styles.textDiv}>
                <h4>STRONG COFFEE, STRONG ROOTS</h4>
                <br />
                <h1>ABOUT OUR CAFE</h1>
                <br />
                <span>Founded in 1987 by the Hernandez brothers, our establishment has been serving up rich coffee sourced from artisan farmers in various regions of South and Central America. We are dedicated to travelling the world, finding the best coffee, and bringing back to you here in our cafe.</span>
                <br />
                <br/>
                <span>We guarantee that you will fall in lust with our decadent blends the moment you walk inside until you finish your last sip. Join us for your daily routine, an outing with friends, or simply just to enjoy some alone time.</span>
            </div>
        </div>
    )
}


export default About;