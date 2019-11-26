import React from "react";
import "../service-section.css";

//props.serviceName props.serviceDescription props.iconName
export default (props) => (
  <div className="col-lg-4">
    <div className="services_box p-3 mt-3">
      <div className="service_icon">
        <i className="mdi mdi-kodi"></i>
      </div>
      <div className="service_content mt-3">
        <h5 className="">{props.serviceName}</h5>
        <div className="service_devider mt-3 "></div>
        <p className="mt-3 text-muted mb-0">{props.serviceDescription}</p>
      </div>
    </div>
  </div>
)

