import React from "react";
import homeStyle from "./Home.module.css";
import logo from "./avatar.png";

export default function Home() {
  return (
    <div className={homeStyle.bg_home}>
      <div className={homeStyle.home}>
        <img className={homeStyle.img} src={logo} alt="logo" />
        <h1 className="my-4 text-white">START REACT</h1>
        <div className={homeStyle.divider}>
          <div className={homeStyle.star_line}></div>
          <div className="divider-custom-icon py-2">
            <i class="fas fa-star fa-2x text-warning mx-3"></i>
          </div>
          <div className={homeStyle.star_line}></div>

        </div>
        <p className="text-white display-6 my-3">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
}
