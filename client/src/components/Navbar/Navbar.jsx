import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {


  return(
    <div className="navbar">
      <Link className="link line" to="/">Home</Link>
      <Link className="link line" to="about">About Me</Link>
      <Link className="link line" to="projects">Projects</Link>
      <Link className="link line" to="contact">Contact</Link>
      <a className="link" href="https://drive.google.com/file/d/1xjIRX7TcVh9I6h3nT4DDsQC0ZsXFWPWA/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
  </div>
  )
}
