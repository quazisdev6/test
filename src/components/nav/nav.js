import React from "react"
import "./nav.css"
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, withPrefix } from "gatsby";
import Project from "../projects-section/project/project";


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

          <StaticQuery
            query={graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "index-page"}}}) {
      nodes {
        frontmatter {
          logolight {
            childImageSharp {
              resize(width: 200, height: 80) {
                src
                tracedSVG
                width
                height
                aspectRatio
                originalName
              }
            }
          }
          logodark {
            childImageSharp {
              resize(width: 200, height: 80) {
                src
                tracedSVG
                width
                height
                aspectRatio
                originalName
              }
            }
          }
        }
      }
    }
  }
`}

            render={ (data) => {
              return data.allMarkdownRemark.nodes.map((val) => {
                console.log(val);
                return (
                  <a className="navbar-brand logo" href="/">
                    <img src={val.frontmatter.logolight ? val.frontmatter.logolight.childImageSharp.resize.src : ""} alt="" className="img-fluid logo-light" />
                    <img src={val.frontmatter.logodark ? val.frontmatter.logodark.childImageSharp.resize.src : ""} alt="" className="img-fluid logo-dark" />
                  </a>
                )
              })

            } }
          ></StaticQuery>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <i className="mdi mdi-menu" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/#project">Projects</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/#services">Services</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/#client">Clients</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/#team">Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/#contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)