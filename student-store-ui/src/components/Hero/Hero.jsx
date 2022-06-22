import * as React from "react"
import superMarketIcon from "/superMarketIcon.png"
import "./Hero.css"

const Hero = () => {
    return (
        <div className="hero">
            <div className="intro-container">
                <h1 className="intro">Welcome!</h1>
                <p className="intro-desc">
                    We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.
                </p>
            </div>
            <div className="hero-img-container">
                <img className="hero-img" src={superMarketIcon} alt="banner image"/>
            </div>
        </div>
    )
}

export default Hero
