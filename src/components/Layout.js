import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/footer/footer'
import Nav from '../components/nav/nav'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <Nav/>
      <img src="/static/img/DCA31.png" alt="" className="img-fluid logo-light" />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
