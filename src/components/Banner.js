import React from 'react'
import Logo from "../assets/logotrans.png";
import "../styles/Banner.css";


function Banner() {
    return (
        <div className="banner">
            <nav className="img-container">
                <img className ="logo" src={Logo} alt="Hashashin Lion" />
            </nav>
            <div className="invite">
                <h1 className="title">Hashashin has all your gaming needs!</h1>
                <button className="button">
                <a className="text"
                href="https://discord.com/api/oauth2/authorize?client_id=767525425865818142&permissions=534723951680&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3F%26client_id%3D%5B767525425865818142%5D%26scope%3Dbot&scope=bot%20applications.commands&permissions=8"
                style={{ textDecoration: "none" }}
                color="none"
                target="_blank"
                rel="noopener noreferrer">Invite
                </a>
                </button>
        </div> 
    </div>  
    )
}



export default Banner
