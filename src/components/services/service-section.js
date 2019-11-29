import React from "react"
import "./service-section.css"
import Service from "./service/service"
import { Link, StaticQuery } from "gatsby";


export default (props) => (
    <section className="section_all bg-light" id="services">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title_all text-center">
                        <div className="section_icons">
                            <i className="mdi mdi-crown"></i>
                        </div>
                        <h3 className="mt-3">Our Best <span className="text_custom"> Service </span></h3>
                        <p className="section_subtitle mx-auto text-muted">{props.serviceBlurb}</p>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
              {/*{testArray.map((service) => {*/}
                {/*return (*/}
                  {/*<Service serviceName={service.serviceName} serviceDescription={service.serviceDescription}/>*/}
                {/*)*/}
              {/*})}*/}
              <StaticQuery
                query={graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "service-name"}}}) {
      nodes {
        frontmatter {
          title
          servicename
          servicedescription
        }
      }
    }
  }
`}

                render={ (data) => {
                  return data.allMarkdownRemark.nodes.map((val) => {
                    console.log(val);
                    return (
                      <Service serviceName={val.frontmatter.servicename} serviceDescription={val.frontmatter.servicedescription}/>
                    )
                  })

                } }
              ></StaticQuery>
            </div>
          <div className="row mt-3">
            <div className="col-lg-12">
              <div className="section_title_all text-center">
                <Link className="btn btn_custom" to="/services">More Services</Link>
              </div>
            </div>
          </div>
        </div>
    </section>
)

