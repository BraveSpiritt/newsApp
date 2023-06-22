import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (<nav className={s.nav}>
        <div >
            <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
        </div>
        <div >
            <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
        </div>
        <div>
            <NavLink className={navData => navData.isActive ? s.item : s.active}>News</NavLink>
        </div>
        <div>
            <NavLink className={navData => navData.isActive ? s.item : s.active}>Music</NavLink>

        </div>
        <div>
            <NavLink className={navData => navData.isActive ? s.item : s.active}>Settings</NavLink>
        </div>
    </nav>
    )
}

export default Navbar;