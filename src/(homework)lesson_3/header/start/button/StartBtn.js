import './StartBtn.css';
import React from "react";


function StartBtn() {
    return (
        <div>
            <button className="mainButton"><img className='headImg' src='https://www.pngall.com/wp-content/uploads/2016/04/Cart-PNG-File.png' /> Cart <span className='zero'>0</span></button>
        </div>
    )
}



export default StartBtn;