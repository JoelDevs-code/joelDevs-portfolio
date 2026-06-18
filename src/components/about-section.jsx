import React from "react"; import "../dist/style.css"; import "../css/about-section.css";
import "../assets/fonts/icomoon/style.css"; import "../assets/library/flaticon/css/all.css"
import "../assets/library/flaticon/css/all.min.css"; import "../assets/fonts/flaticon/font/_flaticon.css"

import profile_img from "../assets/images/image.jpg";

function about_section(){
  return(
    <>
      <section className="about--section w-full" id="about">
        <div className="about--section--wrapper px-5 py-5 flex items-center gap-2">
          <div className="about-section-card">
            <div className="about-section-card-wrapper flex flex-col gap-1">
              <div className="profile-img-wrapper"><img src={profile_img}/></div>
              <div className="card-profile-txt font-bold text-center"><h5>Marcel</h5><span>CONSULTATIONS</span></div>
              <div className="email-address text-gray-500 font-bold text-center text-sm">
                <a className="main-adrress" href="mailto:simonbulus252@gmail.com">simonbulus252@gmail.com</a>
              </div>
              <div className="social-med-link flex gap-1 items-center">
                <a href="https://linkedin.com/in/joel-bulus-177712293" target="_blank" className="linkedin text-white">
                  <button className="linkedin-btn"><i className="icon-linkedin-square"></i></button>
                </a>
                <a href="https://github.com/JoelDevs-code" target="_blank" className="gitHub text-white">
                  <button className="linkedin-btn"><i className="icon-github"></i></button>
                </a>
                <a href="https://x.com/JoeMacex" className="twitter text-white" target="_blank">
                  <button className="linkedin-btn"><i className="icon-twitter"></i></button>
                </a>
                <a href="" className="dribbble text-white" target="_blank">
                  <button className="linkedin-btn"><i className="icon-dribbble"></i></button>
                </a>
              </div>
            </div>
          </div>
          <div className="about-section-caption-txt flex flex-col gap-1">
            <div className="about-cap-text-header flex items-center gap-5">
              <i className="icon-circle text-xs text-green-400"></i><span>About Marcel Consultations</span>
            </div>
            <div className="about-cap-heading"><h2>Innovation & Code Intelligence</h2></div>
            <div className="about-cap-text-paragrapgh">
              <p>
                Hello! I'm Marcel, a Software Engineer with 3 years of experience in designing and developing intelligent systems. My
                expertise spans UI/UX Designs, Frontend-development, AI-engineering. Driven by curiosity, I transform complex 
                data into smart solutions."
              </p>
            </div>
            <div className="experience-card-wrapper flex gap-1 items-center flex-wrap">
              <div className="tesxt-card flex flex-col px-1 py-1 cursor-pointer">
                <h3 className="text-white text-lg font-bold">3+</h3><span className="">Years in Software Development</span>
              </div>
              <div className="tesxt-card flex flex-col px-1 py-1 cursor-pointer">
                <h3 className="text-white text-lg font-bold">100+</h3><span className="">Satisfied Clients</span>
              </div>
              <div className="tesxt-card flex flex-col px-1 py-1 cursor-pointer">
                <h3 className="text-white text-lg font-bold">300+</h3><span className="">Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default about_section;