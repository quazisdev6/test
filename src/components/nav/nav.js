import React from "react"
import "./nav.css"
import { Helmet } from 'react-helmet'
import { Link, withPrefix } from "gatsby";


export default () => (

    <nav className="navbar navbar-expand-lg fixed-top custom_nav_menu sticky">
        <div className="container">
            <Helmet>
              <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                      crossOrigin="anonymous"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                      crossOrigin="anonymous"></script>
              <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                      crossOrigin="anonymous"></script>
              <script src={withPrefix('custom.js')} type="text/javascript" />
            </Helmet>
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
                    <li className="nav-item">
                        <a href="/#home" className="nav-link">Home</a>
                      <Link className="nav-link" to="/#services"></Link>
                    </li>
                    <li className="nav-item">
                        {/*<a href="/#services" className="nav-link">Services</a>*/}
                      <Link className="nav-link" to="/#services">Services</Link>
                    </li>
                    <li className="nav-item">
                        {/*<a href="/#client" className="nav-link">Clients</a>*/}
                      <Link className="nav-link" to="/#client">Clients</Link>
                    </li>
                    <li className="nav-item">
                        {/*<a href="/#team" className="nav-link">Team</a>*/}
                        <Link className="nav-link" to="/#team">Team</Link>
                    </li>
                    <li className="nav-item">
                        {/*<a href="/#contact" className="nav-link">Contact</a>*/}
                        <Link className="nav-link" to="/#contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)