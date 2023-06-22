import React from 'react';
import styles from './Home.module.css'
import { NavLink } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <div className={styles.c}>
            </div>
            <div className={styles.d}>
                <div className={styles.d1}>FRESH COFFE</div>
                <div className={styles.d2}>WORTH DRINKING</div>
                <div className={styles.d3}>Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients.
                    Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!
                </div>
                <div className={styles.d4}>
                    <NavLink to="/" className={styles.d5}>Visit US Today</NavLink>
                </div>
            </div>
            <div className={styles.e}>
                <div className={styles.e1}>
                    <div className={styles.e2}>
                        <div className={styles.e3}>OUR PROMISE</div>
                        <div className={styles.e4}>TO YOU</div>
                        <div className={styles.e5}>When you walk into our shop to start your day, we are dedicated to providing you with
                            friendly service, a welcoming atmosphere, and above all else, excellent products made with the
                            highest quality ingredients. If you are not satisfied, please let us know and we will do whatever we
                            can to make things right!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;