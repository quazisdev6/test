import React from "react"
import "./project-section.css"
import Project from "./project/project"
import { StaticQuery } from "gatsby"

export default (props) => (
    <section className="section_all" id="client">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title_all text-center">
                        <div className="section_icons">
                            <i className="mdi mdi-archive"></i>
                        </div>
                        <h3 className="mt-3">Our Successful <span className="text_custom">Projects</span></h3>
                        <p className="section_subtitle mx-auto text-muted">{props.projectBlurb}</p>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
              {/*{testArray.map((client) => {*/}
                {/*return (*/}
                  {/*<Client clientName={client.clientName} clientDescription={client.clientDescription}/>*/}
                {/*)*/}
              {/*})}*/}
              <StaticQuery
                query={graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "project-name"}}}) {
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
          projectname
          projectdescription
        }
      }
    }
  }
`}

                render={ (data) => {
                  return data.allMarkdownRemark.nodes.map((val) => {
                    console.log(val);
                    return (
                      <Project imgSrc={val.frontmatter.image ? val.frontmatter.image.childImageSharp.resize.src : ""}
                              clientName={val.frontmatter.projectname}
                              clientDescription={val.frontmatter.projectdescription}
                      />
                    )
                  })

                } }
              ></StaticQuery>
            </div>
        </div>
    </section>
)

let testArray = [
  {clientName: "Test name", clientDescription: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"},
  {clientName: "Test name", clientDescription: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"},
  {clientName: "Test name", clientDescription: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"}
]