import React from 'react';
import styles from './home/Home.module.css'
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <div>
            <div className={styles.menu}>
                <div className={styles.m1}>START BOOTSTRAP</div>
                <div className={styles.m2}>Home</div>
                <div className={styles.m3}>About</div>
                <div className={styles.m4}>PRODUCTS</div>
                <div className={styles.m5}> STORE</div>
                <div className={styles.m6}><i className="fa-solid fa-bars"></i></div>
            </div>
            <div className={styles.a1}>A FREE BOOTSTRAP BUSINESS THEME</div>
            <div className={styles.a2}>BUISNESS CASUAL</div>
            <div className={styles.b}>
                <div className={styles.bb}>
                    <NavLink to="/" className={styles.b1}>HOME</NavLink>
                    <NavLink to="/about" className={styles.b2}>ABOUT</NavLink>
                    <NavLink to="/products" className={styles.b3}>PRODUCTS</NavLink>
                    <NavLink to="/store" className={styles.b4}>STORE</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;