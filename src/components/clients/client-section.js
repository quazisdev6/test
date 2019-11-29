import React from "react"
import "./client-section.css"
import Client from "./client/client"
import { StaticQuery } from "gatsby"

export default (props) => (
    <section className="section_all" id="client">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title_all text-center">
                        <div className="section_icons">
                            <i className="mdi mdi-account"></i>
                        </div>
                        <h3 className="mt-3">Our Happy <span className="text_custom">Clients</span></h3>
                        <p className="section_subtitle mx-auto text-muted">{props.clientBlurb}</p>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
              <StaticQuery
                query={graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "client-name"}}}) {
      nodes {
        frontmatter {
          image {
            childImageSharp {
              resize(width: 100, height: 100) {
                src
                tracedSVG
                width
                height
                aspectRatio
                originalName
              }
            }
          }
          title
          clientname
          clientdescription
        }
      }
    }
  }
`}

                render={ (data) => {
                  return data.allMarkdownRemark.nodes.map((val) => {
                    console.log(val);
                    return (
                      <Client imgSrc={val.frontmatter.image ? val.frontmatter.image.childImageSharp.resize.src : ""}
                              clientName={val.frontmatter.clientname}
                              clientDescription={val.frontmatter.clientdescription}
                      />
                    )
                  })

                } }
              ></StaticQuery>
            </div>
        </div>
    </section>
)

