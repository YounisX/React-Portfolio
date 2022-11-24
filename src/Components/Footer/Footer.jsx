import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import footerStyle from "./Footer.module.css";

export default function footer() {
  return (
    <>
      <MDBFooter className="bg-secondary  ">
        <MDBContainer className="p-5  d-flex  flex-row justify-content-between align-items-center">
        <div className="col-md-4 p-2">
            <div className={footerStyle.footshit}>
              <h2> ABOUT FREELANCER</h2>
              <h4>
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by Route
              </h4>
            </div>
          </div>
          <section className="mb-4 ">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>
          <div className="col-md-4 p-2">
            <div className={footerStyle.footshit}>
              <h2> ABOUT FREELANCER</h2>
              <h4>
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by Route
              </h4>
            </div>
          </div>
          
        </MDBContainer>

        <div
          className="text-center text-white p-3 bg-dark"
        
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            Route.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
}
