import React from "react"; import "../dist/style.css"; import "../css/service-section.css";
import "../assets/fonts/icomoon/style.css"; import "../assets/library/flaticon/css/all.css"
import "../assets/library/flaticon/css/all.min.css"; import "../assets/fonts/flaticon/font/_flaticon.css"

function service_section(){
  return(
    <>
      <section className="service--section w-full px-5 py-2 mt-4" id="services">
        <div className="service--section--wrapper w-full flex flex-col gap-1">
          <div className="service-section-header flex flex-col gap-1">
            <div className="service-header-col flex items-center gap-5">
              <i className="icon-circle text-base text-green-400"></i><span>Services</span> 
            </div>
            <h3 className="text-white text-xl font-bold">Software Solutions That Matter</h3>
          </div>
          <div className="service-card-section mt-2">
            <div className="service-section-wrapper flex flex-col gap-2">
              <div className="service-card flex items-center justify-between px-1 py-1">
                <div className="flex gap-2 items-center">
                  <span>01</span><h4 className="text-white font-bold text-2xl">Web App Development</h4>
                </div>
                <button className="view-service-project" title="View Projects"><i className="icon-arrow-right"></i></button>
              </div>
              <div className="service-card flex items-center justify-between px-1 py-1">
                <div className="flex gap-2 items-center">
                  <span>02</span><h4 className="text-white font-bold text-2xl">Mobile App Development</h4>
                </div>
                <button className="view-service-project" title="View Projects"><i className="icon-arrow-right"></i></button>
              </div>
              <div className="service-card flex items-center justify-between px-1 py-1">
                <div className="flex gap-2 items-center">
                  <span>03</span><h4 className="text-white font-bold text-2xl">UI/UX Designs</h4>
                </div>
                <button className="view-service-project" title="View Projects"><i className="icon-arrow-right"></i></button>
              </div>
              <div className="service-card flex items-center justify-between px-1 py-1">
                <div className="flex gap-2 items-center">
                  <span>04</span><h4 className="text-white font-bold text-2xl">Desktop Applications</h4>
                </div>
                <button className="view-service-project" title="View Projects"><i className="icon-arrow-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default service_section;