import React from "react"
import "./team-section.css"
import TeamMember from "./team-member/team-member"
import { StaticQuery } from "gatsby";

export default (props) => (
    <section className="section_all" id="team">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title_all text-center">
                        <div className="section_icons">
                            <i className="mdi mdi-account-multiple"></i>
                        </div>
                        <h3 className="mt-3">Our Creative <span className="text_custom"> Team </span></h3>
                        <p className="section_subtitle mx-auto text-muted">{props.teamBlurb}</p>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
              <StaticQuery
                query={graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "team-name"}}}) {
      nodes {
        frontmatter {
          image {
            childImageSharp {
              resize(width: 400, height: 400) {
                src
                tracedSVG
                width
                height
                aspectRatio
                originalName
              }
            }
          }
          membername
          membertitle
          memberdescription
        }
      }
    }
  }
`}

                render={ (data) => {
                  return data.allMarkdownRemark.nodes.map((val) => {
                    console.log(val);
                    return (
                      <TeamMember imgSrc={val.frontmatter.image ? val.frontmatter.image.childImageSharp.resize.src : ""}
                                  name={val.frontmatter.membername}
                                  title={val.frontmatter.membertitle}
                                  description={val.frontmatter.memberdescription}
                      />
                    )
                  })

                } }
              ></StaticQuery>

            </div>
        </div>
    </section>
)
