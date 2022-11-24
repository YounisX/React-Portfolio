import React from "react";
import contact from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={contact.contact_bg} id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 py-5">
            <h2 className="display-3 fw-bold text-dark text-center pt-5">
              CONTACT ME
            </h2>
            <div className={contact.divider}>
              <div className={contact.star_line}></div>
              <div className="divider-custom-icon py-2">
                <i class="fas fa-star fa-2x text-warning mx-3"></i>
              </div>
              <div className={contact.star_line}></div>
            </div>
          </div>
          {/* AND HERE WE MAKE SOME FORM WILL KILL ME TO FINISH IT (i.e RegEx)  */}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <form className="d-flex flex-column flex-wrap  " >
              <label  className="text-success" htmlFor="name">Name</label>
              <input className={contact.contact_d} type="text" name="name" id="name" placeholder="Name" />
              <hr/>
              <label className="text-success"  htmlFor="email">Email</label>
              <input className={contact.contact_d} type="email" name="email" id="email" placeholder="Email" />
              <hr/>
              <label  className="text-success" htmlFor="number">Phone Number</label>
                <input className={contact.contact_d} type="tel" name="" id="phone" placeholder="Phone Number" />
              <hr/>
              <label  className="text-success" htmlFor="message">Message</label>
<textarea name="message" id="message" className={contact.contact_d} cols="30" rows="5"></textarea>
              <hr/>
<button className={contact.btn}>Send</button>

            </form>

          </div>
        </div>
      </div>
      
      
        
    </section>
  );
}
