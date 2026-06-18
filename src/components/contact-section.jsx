import React from "react"; import "../dist/style.css"; import "../css/contact-section.css";
import "../assets/fonts/icomoon/style.css"; import "../assets/library/flaticon/css/all.css"
import "../assets/library/flaticon/css/all.min.css"; import "../assets/fonts/flaticon/font/_flaticon.css"

function contact_section(){
  return(
    <>
      <section className="contact-section w-full mt-3 px-5 py-5" id="contact">
        <div className="contact-section-wrapper w-full flex items-center justify-between">
          <div className="contact-section-col-txt flex flex-col gap-2">
            <div className="contact-section-header-col flex gap-5 items-center">
              <i className="icon-circle text-xs text-green-400"></i><span>Portfolio</span>
            </div>
            <h2 className="text-white text-lg">
              Lets <em className="text-green-400 font-normal">Build </em>
              an Incredible <br></br> Work Together
            </h2>
            <h3 className="text-white text-2xl"><a href="mailto:simonbulus252@gmail.com">simonbulus962@gmail.com</a></h3>
            <div className="contact-social-wrapper flex items-center gap-1">
              <a href="https://linkedin.com/in/joel-bulus-177712293" target="_blank">
                <button className="linkedin-soc text-white"><i className="icon-linkedin"></i></button>
              </a>
              <a href="https://github.com/JoelDevs-code" target="_blank">
                <button className="linkedin-soc text-white"><i className="icon-github"></i></button>
              </a>
              <a href="https://x.com/JoeMacex">
                <button className="linkedin-soc text-white"><i className="icon-twitter"></i></button>
              </a>
              <a href="">
                <button className="linkedin-soc text-white"><i className="icon-dribbble"></i></button>
              </a>
            </div>
          </div>
          <form action="" className="contact--form px-2 py-2 flex flex-col gap-1" id="contact-form">
            <div className="input-col-wrapper flex flex-col gap-5">
              <label htmlFor="" className="text-white">Full Name</label>
              <input type="text" className="text-white" placeholder="eg. bulus joel" />
            </div>
            <div className="input-col-wrapper flex flex-col gap-5">
              <label htmlFor="" className="text-white">Email</label>
              <input type="text" className="text-white" placeholder="example@mail.com" />
            </div>
            <div className="input-col-wrapper flex flex-col gap-5">
              <label htmlFor="" className="text-white">Message</label>
              <textarea name="contact-message" id=""></textarea>
            </div>
            <button className="submit-contact text-white flex items-center gap-1 cursor-pointer">
              <span>Submit</span><i className="icon-arrow-right text-xs"></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default contact_section;