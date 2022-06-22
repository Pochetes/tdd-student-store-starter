import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import About from "../About/About"
import Contact from "../Contact/Contact"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/#about" element={<About />} />
            <Route path="/#contact" element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
