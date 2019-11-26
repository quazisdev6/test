import React from "react"
import "./client-section.css"


export default () => (
    <section className="section_all" id="client">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title_all text-center">
                        <div className="section_icons">
                            <i className="mdi mdi-account"></i>
                        </div>
                        <h3 className="mt-3">Our Happy <span className="text_custom">Clients</span></h3>
                        <p className="section_subtitle mx-auto text-muted">It is a long established fact that a reader
                            will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-lg-4">
                    <div className="landing_client_box mx-auto text-center mt-3">
                        <div className="landing_client_img_box">
                            <img src="images/client/client-1.jpg" alt=""
                                 className="img-fluid mx-auto d-block rounded-circle"/>
                        </div>
                        <div className="landing_testi_desc mt-4">
                            <p className="text-muted">Ut tincidunt ex a tempor congue, lacus magna pretium quam,
                                penatibus et magnis dis parturient montes.</p>
                            <p className="user-work mb-0">Donald Ramon - <span className="text-custom">Director</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="landing_client_box mx-auto text-center mt-3">
                        <div className="landing_client_img_box">
                            <img src="images/client/client-2.jpg" alt=""
                                 className="img-fluid mx-auto d-block rounded-circle"/>
                        </div>
                        <div className="landing_testi_desc mt-4">
                            <p className="text-muted">Ut tincidunt ex a tempor congue, lacus magna pretium quam,
                                penatibus et magnis dis parturient montes.</p>
                            <p className="user-work mb-0">Donald Ramon - <span className="text-custom">Director</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="landing_client_box mx-auto text-center mt-3">
                        <div className="landing_client_img_box">
                            <img src="images/client/client-3.jpg" alt=""
                                 className="img-fluid mx-auto d-block rounded-circle"/>
                        </div>
                        <div className="landing_testi_desc mt-4">
                            <p className="text-muted">Ut tincidunt ex a tempor congue, lacus magna pretium quam,
                                penatibus et magnis dis parturient montes.</p>
                            <p className="user-work mb-0">Donald Ramon - <span className="text-custom">Director</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)