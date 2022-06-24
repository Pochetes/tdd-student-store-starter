import * as React from "react"
import { Link } from "react-router-dom"
import fbIcon from "/fbIcon.svg"
import igIcon from "/igIcon.svg"
import twitIcon from "/twitIcon.svg"
import Logo from "../Logo/Logo"
import "./Navbar.css"

export default function Navbar() {
  const executeScroll = e => {
    const elementTargeted = e.target.hash
    const elementToScroll = document.querySelector(`${elementTargeted} h1`)
    elementToScroll.scrollIntoView()
  }

  return (
    <nav className="navbar">
      <Logo />
      <div className="navLinks">
        <div className="about" onClick={e => executeScroll(e)}>
          <Link to="/#about">About</Link>
        </div>
        <div className="contact" onClick={e => executeScroll(e)}>
          <Link to="/#contact">Contact</Link>
        </div>
      </div>
      <div className="navbar-socials">
        <img src={fbIcon} alt="facebook icon" />
        <img src={igIcon} alt="instagram icon" />
        <img src={twitIcon} alt="twitter icon" />
      </div>
    </nav>
  )
}
