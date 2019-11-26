import React from "react"
import "./team-section.css"
import TeamMember from "./team-member/team-member"

export default () => (
    <section className="section_all" id="team">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_title_all text-center">
                        <div className="section_icons">
                            <i className="mdi mdi-biohazard"></i>
                        </div>
                        <h3 className="mt-3">Our Creative <span className="text_custom"> Team </span></h3>
                        <p className="section_subtitle mx-auto text-muted">It is a long established fact that a reader
                            will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
              {testArray.map((teamMember) => {
                return (
                  <TeamMember name={teamMember.name} title={teamMember.title} description={teamMember.description}/>
                )
              })}
                {/*<div className="col-lg-3">*/}
                    {/*<div className="landing_team_box bg-white text-center mt-3">*/}
                        {/*<img src="images/team/team-1.jpg" alt="" className=" img-fluid mx-auto d-block"/>*/}
                            {/*<div className="mt-3 buss_team_info p-3">*/}
                                {/*<h6 className="">Ronnie M. Ricketts</h6>*/}
                                {/*<small className="text-muted font-weight-normal">CEO/Founder</small>*/}
                                {/*<p className="mb-0 text-muted">It is a long established fact that a reader will be*/}
                                    {/*distracted</p>*/}
                                {/*<div className="mt-3 mb-3">*/}
                                    {/*<ul className="list-inline business_team_social mb-0 text-center">*/}
                                        {/*<li className="list-inline-item"><a href="#"><i*/}
                                            {/*className="mdi mdi-facebook"></i></a></li>*/}
                                        {/*<li className="list-inline-item"><a href="#"><i className="mdi mdi-google"></i></a>*/}
                                        {/*</li>*/}
                                        {/*<li className="list-inline-item"><a href="#"><i className="mdi mdi-twitter"></i></a>*/}
                                        {/*</li>*/}
                                        {/*<li className="list-inline-item"><a href="#"><i*/}
                                            {/*className="mdi mdi-instagram"></i></a></li>*/}
                                    {/*</ul>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}

                {/*<div className="col-lg-3">*/}
                    {/*<div className="landing_team_box bg-white text-center mt-3">*/}
                        {/*<img src="images/team/team-2.jpg" alt="" className=" img-fluid mx-auto d-block"/>*/}
                            {/*<div className="mt-3 buss_team_info p-3">*/}
                                {/*<h6 className="">Robert E. Ricks</h6>*/}
                                {/*<small className="text-muted font-weight-normal">CEO/Founder</small>*/}
                                {/*<p className="mb-0 text-muted">It is a long established fact that a reader will be*/}
                                    {/*distracted</p>*/}
                                {/*<div className="mt-3 mb-3">*/}
                                    {/*<ul className="list-inline business_team_social mb-0 text-center">*/}
                                        {/*<li className="list-inline-item"><a href="#"><i*/}
                                            {/*className="mdi mdi-facebook"></i></a></li>*/}
                                        {/*<li className="list-inline-item"><a href="#"><i className="mdi mdi-google"></i></a>*/}
                                        {/*</li>*/}
                                        {/*<li className="list-inline-item"><a href="#"><i className="mdi mdi-twitter"></i></a>*/}
                                        {/*</li>*/}
                                        {/*<li className="list-inline-item"><a href="#"><i*/}
                                            {/*className="mdi mdi-instagram"></i></a></li>*/}
                                    {/*</ul>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}

                {/*<div className="col-lg-3">*/}
                    {/*<div className="landing_team_box bg-white text-center mt-3">*/}
                        {/*<img src="images/team/team-3.jpg" alt="" className=" img-fluid mx-auto d-block"/>*/}
                            {/*<div className="mt-3 buss_team_info p-3">*/}
                                {/*<h6 className="">Jennifer M. Marsh</h6>*/}
                                {/*<small className="text-muted font-weight-normal">CEO/Founder</small>*/}
                                {/*<p className="mb-0 text-muted">It is a long established fact that a reader will be*/}
                                    {/*distracted</p>*/}
                                {/*<div className="mt-3 mb-3">*/}
                                    {/*<ul className="list-inline business_team_social mb-0 text-center">*/}
                                        {/*<li className="list-inline-item"><a href="#"><i*/}
                                            {/*className="mdi mdi-facebook"></i></a></li>*/}
                                        {/*<li className="list-inline-item"><a href="#"><i className="mdi mdi-google"></i></a>*/}
                                        {/*</li>*/}
                                        {/*<li className="list-inline-item"><a href="#"><i className="mdi mdi-twitter"></i></a>*/}
                                        {/*</li>*/}
                                        {/*<li className="list-inline-item"><a href="#"><i*/}
                                            {/*className="mdi mdi-instagram"></i></a></li>*/}
                                    {/*</ul>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}

                {/*<div className="col-lg-3">*/}
                    {/*<div className="landing_team_box bg-white text-center mt-3">*/}
                        {/*<img src="images/team/team-4.jpg" alt="" className=" img-fluid mx-auto d-block"/>*/}
                            {/*<div className="mt-3 buss_team_info p-3">*/}
                                {/*<h6 className="">James C. Spence</h6>*/}
                                {/*<small className="text-muted font-weight-normal">CEO/Founder</small>*/}
                                {/*<p className="mb-0 text-muted">It is a long established fact that a reader will be*/}
                                    {/*distracted</p>*/}
                            {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        </div>
    </section>
)


let testArray = [
  {name: "Test name", title: "Lorem IpsumLorem", description: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"},
  {name: "Test name", title: "Lorem IpsumLorem", description: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"},
  {name: "Test name", title: "Lorem IpsumLorem", description: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"},
  {name: "Test name", title: "Lorem IpsumLorem", description: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum"}
]