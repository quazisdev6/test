import React from "react"
import "./service-section.css"
import Service from "./service/service"
import { StaticQuery } from "gatsby";


export default () => (
    <section className="section_all bg-light" id="services">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title_all text-center">
                        <div className="section_icons">
                            <i className="mdi mdi-crown"></i>
                        </div>
                        <h3 className="mt-3">Our Best <span className="text_custom"> Service </span></h3>
                        <p className="section_subtitle mx-auto text-muted">It is a long established fact that a reader
                            will be distracted by the readable content of a page when looking at its layout.</p>
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
        </div>
    </section>
)

let testArray = [
  {serviceName: "Test name", serviceDescription: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"},
  {serviceName: "Test name", serviceDescription: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"},
  {serviceName: "Test name", serviceDescription: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"},
  {serviceName: "Test name", serviceDescription: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"},
  {serviceName: "Test name", serviceDescription: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"},
  {serviceName: "Test name", serviceDescription: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"}
]