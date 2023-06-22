import About from "../about/About";
import styles from './Store.module.css';

const Store = () => {
    return (
        <div className={styles.havaiDiv}>
            <div className={styles.parentDiv}>
                <div className={styles.firstChild}>
                    <div className={styles.childStyle}>
                        <h6>COME ON IN</h6>
                        <h1>WE'RE OPEN</h1>
                        <ul>
                            <li>Sunday <span>Closed</span></li>
                            <hr color=''/>
                            <li>Monday <span>7:00 AM to 8:00 PM</span></li>
                            <hr color=''/>
                            <li>Tuesday <span>7:00 AM to 8:00 PM</span></li>
                            <hr color=''/>
                            <li>Wednesday<span>7:00 AM to 8:00 PM</span></li>
                            <hr color=''/>
                            <li>Thursday <span>7:00 AM to 8:00 PM</span></li>
                            <hr color=''/>
                            <li>Friday <span>7:00 AM to 8:00 PM</span></li>
                            <hr color=''/>
                            <li>Saturday <span>9:00 AM to 5:00 PM</span></li>
                            <hr color=''/>
                        </ul>
                        <p>
                            <em>
                                <strong>1116 Orchard Street</strong>
                                <br />
                                Golden Valley, Minnesota
                            </em>
                        </p>
                        <p>
                            <em>
                                <small>Call Anytime</small>
                                <br />
                                (317) 585-8468
                            </em>
                        </p>
                    </div>

                </div>
            </div>
            <About />
        </div>
    )
}


export default Store;