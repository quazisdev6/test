import React from 'react'
import Layout from '../components/Layout'
import { kebabCase } from "lodash";
import "../styles/global.css";

const NotFoundPage = () => (
  <Layout>
    <h1
      className="has-text-weight-bold is-size-1 page-name"
      style={{
        backgroundColor: '#4e4f5d',
        color: 'white',
        padding: '1rem',
        height: '4.75rem'
      }}
    >Not Found
    </h1>
    <section className="bg_home_cover_landing full_height_100vh_home" id="home">
      <div className="bg_overlay_cover_on_landing" />
      <div className="home_table_cell">
        <div className="home_table_cell_center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <h1 className="home_title_landing text-white mx-auto text-capitalize mb-0 pt-3">Unfortunately, there are no results for this page. Please use the navigation above.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
