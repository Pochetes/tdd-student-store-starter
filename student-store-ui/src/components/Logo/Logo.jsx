import * as React from "react"
import { Link } from "react-router-dom"
import "./Logo.css"

const Logo = () => {
    return (
        <Link to="/">
            <div className="logo">
                <img
                    src="https://png.pngtree.com/element_our/png/20180905/real-estate-simple-logo-design-png_87528.jpg"
                    alt="logo image"
                />
            </div>
        </Link>
    )
}

export default Logo
