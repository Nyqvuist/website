import React from 'react'
import Logo from "../assets/logo.png";
import "../styles/Banner.css";


function Banner() {
    return (
        <div className="banner" >
            <div className="logo">
                <img src={Logo} />
            </div>
        </div>
    )
}

export default Banner
