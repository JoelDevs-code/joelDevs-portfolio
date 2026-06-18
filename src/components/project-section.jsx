import React from "react"; import "../dist/style.css"; import "../css/project-section.css";
import "../assets/fonts/icomoon/style.css"; import "../assets/library/flaticon/css/all.css"
import "../assets/library/flaticon/css/all.min.css"; import "../assets/fonts/flaticon/font/_flaticon.css"

import rms_image from "../assets/images/project-rms.jpg"; import portfolio_img from "../assets/images/portfolio.png";


function project_section(){
  return(
    <>
      <section className="project-section w-full px-5 py-5 mt-4" id="portfolio">
        <div className="project-section-wrapper flex flex-col gap-3">
          <div className="project-section-header flex flex-col gap-5">
            <div className="project-header-col flex gap-5 items-center">
              <i className="icon-circle text-xs text-green-400"></i><span>Portfolio</span>
            </div>
            <h3 className="text-white text-lg font-bold">Featured Projects</h3>
          </div>
          <div className="project-card-section">
            <div className="project-card-wrapper flex flex-wrap gap-3 justify-center">
              <div className="project-card flex flex-col gap-1 px-2 py-2">
                <div className="project-card-image"><a href=""><img src={portfolio_img}/></a></div>
                <div className="project-card-text"><h4 className="text-white font-bold text-2xl">Portfolio Website</h4></div>
              </div>
              <div className="project-card flex flex-col gap-1 px-2 py-2">
                <div className="project-card-image"><a href=""><img src={portfolio_img}/></a></div>
                <div className="project-card-text"><h4 className="text-white font-bold text-2xl">Resturant Management System</h4></div>
              </div>
              <div className="project-card flex flex-col gap-1 px-2 py-2">
                <div className="project-card-image"><a href=""><img src={portfolio_img}/></a></div>
                <div className="project-card-text"><h4 className="text-white font-bold text-2xl">Resturant Management System</h4></div>
              </div>
              <div className="project-card flex flex-col gap-1 px-2 py-2">
                <div className="project-card-image"><a href=""><img src={portfolio_img}/></a></div>
                <div className="project-card-text"><h4 className="text-white font-bold text-2xl">Resturant Management System</h4></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default project_section;