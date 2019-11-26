import React from "react";
import "../team-section.css";

//props.name props.title props.description
export default (props) => (
  <div className="col-lg-3">
    <div className="landing_team_box bg-white text-center mt-3">
      <img src="images/team/team-4.jpg" alt="" className=" img-fluid mx-auto d-block"/>
      <div className="mt-3 buss_team_info p-3">
        <h6 className="">{props.name}</h6>
        <small className="text-muted font-weight-normal">{props.title}</small>
        <p className="mb-0 text-muted">{props.description}</p>
      </div>
    </div>
  </div>
)

