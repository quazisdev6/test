import React from "react"
import "./contact-us.css"
import { StaticQuery } from "gatsby";

export default () => (
    <section className="section_all" id="contact">

      <StaticQuery
        query={graphql`
      {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "index-page"}}}) {
          nodes {
            frontmatter {
              contactblurb
              contactheading
              contactsubheading
              contactemail
              contactphone
              contactaddresslineone
              contactaddresslinetwo
            }
          }
        }
      }
    `}
        render={(data) => {
            const {contactblurb,
              contactheading,
              contactsubheading,
              contactemail,
              contactphone,
              contactaddresslineone,
              contactaddresslinetwo} = data.allMarkdownRemark.nodes[0].frontmatter;

            return (
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section_title_all text-center">
                      <div className="section_icons">
                        <i className="mdi mdi-contacts"></i>
                      </div>
                      <h3 className="mt-3">Contact <span className="text_custom">Us </span></h3>
                      <p className="section_subtitle mx-auto text-muted">{contactblurb ? contactblurb : ""}</p>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 vertical_content_manage">
                  <div className="col-lg-6">
                    <div className="contact_info_box mt-3 bg-light p-5">
                      <div className="landing_contact_title">
                        <h6 className="text-muted">{contactheading ? contactheading : ""}</h6>
                        <h1 className="text-capitalize text_custom">{contactsubheading ? contactsubheading : ""}</h1>
                      </div>

                      <div className="mt-3 contact_details">
                        <p className="mt-3 mail ">E-mail : <a href="#" className="text-muted">{contactemail ? contactemail : ""}</a>
                        </p>
                        <p className="mb-0">Phone : {contactphone ? contactphone : ""}</p>
                        <p className="mb-0 mt-3">{contactaddresslineone ? contactaddresslineone : ""}
                          <br/>{contactaddresslinetwo}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
        }
      ></StaticQuery>
    </section>
)
