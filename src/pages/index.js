import React from "react"
import ".././styles/global.css"
import Nav from "../components/nav/nav"
import HomeSection from "../components/home-section/home-section"
import ServiceSection from "../components/services/service-section"
import ClientSection from "../components/clients/client-section"
import TeamSection from "../components/team/team-section"
import ProjectSection from "../components/projects-section/project-section"
import ContactSection from "../components/contact-us/contact-us"
import Footer from "../components/footer/footer"
import Helmet from 'react-helmet'
import useSiteMetadata from "../components/SiteMetadata";


export default ({data}) => {
  console.log(data);
  const {clientblurb, serviceblurb, teamblurb, projectblurb} = data.allMarkdownRemark.nodes[0].frontmatter;
  const { title, description } = useSiteMetadata();
  console.log(clientblurb, serviceblurb, teamblurb);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Nav/>
      <HomeSection/>
      <ServiceSection serviceBlurb={serviceblurb}/>
      <ProjectSection projectBlurb={projectblurb}/>
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
          projectblurb
        }
      }
    }
  }
`