import React from "react";
import "../client-section.css"

//props.clientName props.clientDescription props.imageLocation
export default (props) => (
  <div className="col-lg-4">
    <div className="landing_client_box mx-auto text-center mt-3">
      <div className="landing_client_img_box">
        <img src={props.imgSrc} alt=""
             className="img-fluid mx-auto d-block rounded-circle"/>
      </div>
      <div className="landing_testi_desc mt-4">
        <p className="text-muted">{props.clientDescription}</p>
        <p className="user-work mb-0">{props.clientName}</p>
      </div>
    </div>
  </div>
)

