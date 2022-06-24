import * as React from "react"
import contactImage from "/contactImage.svg"
import "./Contact.css"

const Contact = () => {
    return (
        <div id="contact">
            <div className="contact-details">
                <div className="actual-contact-details">
                Email:    code@path.org<br></br><br></br>
                Phone:    1-800-CODEPATH<br></br><br></br>
                Address:    123 Fake Street, San Francisco, CA<br></br><br></br>
                Socials: IG FB TWTR
                </div>
                <div className="contact-image">
                    <img src={contactImage} alt="contact image" />
                </div>
            </div>
            <h1>Contact Us!</h1>
        </div>
    )
}

export default Contact
