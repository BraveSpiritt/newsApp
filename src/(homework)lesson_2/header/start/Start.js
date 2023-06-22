import StartBtn from './button/StartBtn';
import './start.css';
import React from "react"



function Header() {
    return (
        <div className='parentDiv1'>
            <div className='mainDiv'>
                <p>Start Bootstrap</p>
                <p className='home'>Home</p>
                <p className='about'>About</p>
                <p className='shop'>Shop</p>
            </div>
            <StartBtn />
        </div>
    )
}


export default Header;