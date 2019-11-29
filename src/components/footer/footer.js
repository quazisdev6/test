import React from "react"
import "./footer.css"
import Search from "../../components/search/search"
export default () => (
    <section className="section_all bg_footer">
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-12">
                    <div className="text-center mt-5">
                        <Search/>
                        <p className="footer_alt_cpy mb-0">{new Date().getFullYear()} &copy; DCA Group.</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
)