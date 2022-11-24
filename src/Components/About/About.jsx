import React from "react";
import about from "./About.module.css";
export default function About() {
  return (
    <>
      <section className={about.about_bg} id="about">
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-md-10  py-5 m-auto">
              <h2 className="display-2 fw-bold text-white text-center pt-5">
                ABOUT
              </h2>
              <div className={about.divider}>
                <div className={about.star_line}></div>
                <div className="divider-custom-icon py-2">
                  <i class="fas fa-star fa-2x text-warning mx-3"></i>
                </div>
                <div className={about.star_line}></div>
              </div>
            </div>
            <div className="col-md-10 col-xl-4">
              <p className="text-white text-center ">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className=" col-md-10 col-xl-4">
              <p className="text-white text-center ">
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
