
import React from "react"; import "../dist/style.css"; import "../css/main-header.css";
import "../assets/fonts/icomoon/style.css"; import "../assets/library/flaticon/css/all.css"
import "../assets/library/flaticon/css/all.min.css"; import "../assets/fonts/flaticon/font/_flaticon.css"

import main$image from "../assets/images/image.jpg";

function main_header(){

  function toggle_menu(){
    const menu_icon = document.getElementById("menu_icon");
    const main_$_nav = document.getElementById("main_$_nav");

    main_$_nav.classList.toggle("main--navigation-on");
    if (main_$_nav.classList.contains("main--navigation-on")) {
      menu_icon.classList.remove("icon-bars"); menu_icon.classList.add("icon-close");
    }
    else if (main_$_nav.classList.contains("main--navigation")) {
      menu_icon.classList.remove("icon-close"); menu_icon.classList.add("icon-bars"); 
    }
    
  }
  window.addEventListener("resize",()=>{
    if (window.innerWidth < 1010) {
      main_$_nav.classList = ("main--navigation");
      if (main_$_nav.classList.contains("main--navigation")) {
        menu_icon.classList.remove("icon-close"); menu_icon.classList.add("icon-bars"); 
      }
    }
  })

  return(
    <>
      <header className="main--header fixed w-full px-5 py-2" id="main_$_header">
        <div className="main--header-wrapper flex px-1 py-1 justify-between items-center">
          <div className="main--logo flex items-center gap-5" id="main_$_logo">
            <div className="logo-img"><img src={main$image} draggable="false"/></div>
            <div className="logo-txt block items-center">
              <h4 className="logo-heading text-white font-bold">Marcel</h4>
              <span className="logo-span text-xs text-green-400 font-bold">CONSULTATIONS</span>
            </div>
          </div>
          <nav className="main--navigation" id="main_$_nav">
            <ul className="navigation--wrapper">
              <li className="nav--list text-white"><a href="#home" className="nav--link"><span>Home</span></a></li>
              <li className="nav--list text-white"><a href="#about" className="nav--link"><span>About</span></a></li>
              <li className="nav--list text-white"><a href="" className="nav--link"><span>Resume</span></a></li>
              <li className="nav--list text-white"><a href="#services" className="nav--link"><span>Services</span></a></li>
              <li className="nav--list text-white"><a href="#portfolio" className="nav--link"><span>Portfolio</span></a></li>
              <li className="nav--list text-white"><a href="#contact" className="nav--link"><span>Contact</span></a></li>
            </ul>
          </nav>
          <button className="build--btn text-white cursor-pointer" id="build_$_btn">Let's Build</button>
          <button className="menu--btn text-white cursor-pointer" onClick={toggle_menu}>
            <span className="flex gap-5"><i className="icon-bars" id="menu_icon"></i></span>
          </button>
        </div>
      </header>
    </>
  )
}

export default main_header;

// icon-stumbleupon-circle

