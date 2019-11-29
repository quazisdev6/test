import React from "react"
import "./home-section.css"
import { StaticQuery } from "gatsby";


export default () => (
    <section className="bg_home_cover_landing full_height_100vh_home" id="home">
        <div className="bg_overlay_cover_on_landing" />
        <div className="home_table_cell">
            <div className="home_table_cell_center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                              <StaticQuery
                                query={graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "index-page"}}}) {
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
          heading
        }
      }
    }
  }
`}

                                render={ (data) => {
                                  return data.allMarkdownRemark.nodes.map((val) => {
                                    console.log(val);
                                    return (
                                      <h1 className="home_title_landing text-white mx-auto text-capitalize mb-0 pt-3">{val.frontmatter.heading}</h1>
                                    )
                                  })

                                } }
                              ></StaticQuery>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)