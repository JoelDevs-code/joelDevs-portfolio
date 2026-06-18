
import React from "react"; import "../dist/style.css"; import "../css/hero-section.css";
import "../assets/fonts/icomoon/style.css"; import "../assets/library/flaticon/css/all.css"
import "../assets/library/flaticon/css/all.min.css"; import "../assets/fonts/flaticon/font/_flaticon.css"



function hero_section(){
  return(
    <>
    <main className="main--section h-screen w-full" id="home">
      <div className="main--section--wrapper w-full px-5 py-5">
        <div className="hero--caption--wrapper flex flex-col py-5 items-center">
          <h1 className="text-white mt-2">
            Let's Build a Digital Backbone, <em>Engineering high-performance</em> WEB solutions.
          </h1>
          <button className="main--btn flex gap-1 items-center" id="main_$_btn">
            <span>Let's Build</span><i className="icon-arrow-right"></i>
          </button>
        </div>
      </div>
    </main>
    </>
  )
}

export default hero_section;