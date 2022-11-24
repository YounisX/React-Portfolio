import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return <> 
  
  
  
  
  
  
  
  <nav className="navbar navbar-expand-lg  bg-light fixed-top  px-5">
  <h2 className="navbar-brand px-5 fw-bold" smooth to='#'>Start React</h2>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-end px-5" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="portfolio">PORTFOLIO <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="about">About <span className="sr-only"></span></NavLink>

      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="contact">Contact <span className="sr-only"></span></NavLink>

      </li>

    </ul>

  </div>
</nav>
  
  
  
  
  
  
  
  
  
  </>
}
