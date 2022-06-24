import * as React from "react"
import aboutImage from "/aboutImage.svg"
import "./About.css"

const About = () => {
    return (
        <div id="about">
            <h1>About</h1>
            <div className="about-text">
                <div>The codepath student store offers great products at great prices from a great team and for a great cause.</div>
                <div>We've searched far and wide for items that perk the interests of even the most eccentric studentsand decided to offer them all here in one place.</div>
                <div>All proceeds go towards bringing high quality CS education to college students around the country.</div>
            </div>
            <div className="about-visual">
                <img src={aboutImage} alt="about image" />
            </div>
        </div>
    )
}

export default About
