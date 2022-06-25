import * as React from "react"
import { Link } from "react-router-dom"
import cubeLogo from "/cubeLogo.png"
import "./Logo.css"

const Logo = () => {
    return (
        <Link to="/">
            <div className="logo">
                <img
                    src={cubeLogo}
                    alt="logo image"
                />
            </div>
        </Link>
    )
}

export default Logo
