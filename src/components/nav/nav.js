import React from "react"
import "./nav.css"

export default () => (
    <nav className="navbar navbar-expand-lg fixed-top custom_nav_menu sticky">
        <div className="container">
            {/* LOGO */}
            <a className="navbar-brand logo" href="index.html">
                <img src="images/logo-2.png" alt="" className="img-fluid logo-light" />
                <img src="images/logo-dark.png" alt="" className="img-fluid logo-dark" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <i className="mdi mdi-menu" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link">Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#client" className="nav-link">Clients</a>
                    </li>
                    <li className="nav-item">
                        <a href="#team" className="nav-link">Team</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)