import React from 'react'
import Layout from '../../components/Layout'
import ServiceRoll from '../../components/ServiceRoll'

export default class ServiceIndexPage extends React.Component {
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
            className="has-text-weight-bold is-size-1"
            style={{
              backgroundColor: '#212529',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Stories
          </h1>
        </div>
        <section className="section">
          <div className="container">
            {/*<div className="content">*/}
              <ServiceRoll />
            {/*</div>*/}
          </div>
        </section>
      </Layout>
    )
  }
}
