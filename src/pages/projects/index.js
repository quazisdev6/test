import React from 'react'
import Layout from '../../components/Layout'
import ProjectRoll from '../../components/ProjectRoll'
import "../../styles/global.css"

export default class ProjectIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1 page-name"
            style={{
              backgroundColor: '#212529',
              color: 'white',
              padding: '1rem',
            }}
          >
            Projects
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <ProjectRoll />
          </div>
        </section>
      </Layout>
    )
  }
}
