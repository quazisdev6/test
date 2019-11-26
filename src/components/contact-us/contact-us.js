import React from "react"
import "./contact-us.css"


export default () => (
    <section className="section_all" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title_all text-center">
                        <div className="section_icons">
                            <i className="mdi mdi-contacts"></i>
                        </div>
                        <h3 className="mt-3">Contact <span className="text_custom">Us </span></h3>
                        <p className="section_subtitle mx-auto text-muted">It is a long established fact that a reader
                            will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
            </div>
            <div className="row mt-5 vertical_content_manage">
                <div className="col-lg-6">
                    <div className="contact_info_box mt-3 bg-light p-5">
                        <div className="landing_contact_title">
                            <h6 className="text-muted">Contact Info </h6>
                            <h1 className="text-capitalize text_custom">Hello What's On Your Mind</h1>
                        </div>

                        <div className="mt-3 contact_details">
                            <p className="mt-3 mail ">E-mail : <a href="#" className="text-muted">Support@info.com</a>
                            </p>
                            <p className="mb-0">Phone : +789 7069 5656</p>
                            <p>Office : 267-736-1861</p>

                            <p className="mb-0 mt-3">1651 Linda Street Eagleville,
                                <br/>California,91752.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
