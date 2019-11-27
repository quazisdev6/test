import React from "react"
import ".././styles/global.css"
import Nav from "../components/nav/nav"
import HomeSection from "../components/home-section/home-section"
import ServiceSection from "../components/services/service-section"
import ClientSection from "../components/clients/client-section"
import TeamSection from "../components/team/team-section"
import ContactSection from "../components/contact-us/contact-us"
import Footer from "../components/footer/footer"


export default ({data}) => {
  console.log(data);
  const {clientblurb, serviceblurb, teamblurb} = data.allMarkdownRemark.nodes[0].frontmatter;
  console.log(clientblurb, serviceblurb, teamblurb);

  return (
    <div>
      <Nav/>
      <HomeSection/>
      <ServiceSection serviceBlurb={serviceblurb}/>
      <ClientSection clientBlurb={clientblurb}/>
      <TeamSection teamBlurb={teamblurb}/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "index-page"}}}) {
      nodes {
        frontmatter {
          serviceblurb
          teamblurb
          clientblurb
        }
      }
    }
  }
`