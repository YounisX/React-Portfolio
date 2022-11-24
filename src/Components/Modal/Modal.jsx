import React, { useState } from "react";
import cake from "../../img/cake.png";
import cabin from "../../img/cabin.png";
import circus from "../../img/circus.png";
import game from "../../img/game.png";
import safe from "../../img/safe.png";
import submarine from "../../img/submarine.png";

import modalStyle from "../Modal/Modal.module.css";
export default function Modal({closeModal}) {

  return (
    <>
      <div className={modalStyle.overlay}>
        <div className={modalStyle.modal_design}>
          <div className="position-relative
           content d-flex flex-column g-4 align-items-center justify-content-center">
            <div className={modalStyle.icon_close}><i onClick={()=> {closeModal(false)}} className="fa-solid fa-close fa-2x text-success"></i></div>
            <div className="title text-cneter">
              <h2 className="text-dark text-center ">Tasty Cake</h2>
            </div>
            <div className={modalStyle.divider}>
              <div className={modalStyle.star_line}></div>
              <div className="divider-custom-icon py-2">
                <i class="fas fa-star fa-2x text-warning mx-3"></i>
              </div>
              <div className={modalStyle.star_line}></div>
            </div>
            <div className={modalStyle.img_container}>
              <img className={modalStyle.img_style} src={cake} alt="" />
            </div>

            <div className="desciption text-center w-75 m-auto py-5">
              <h6 className=" text-center text-dark ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam nesciunt vel dolores id sed praesentium doloribus
                incidunt. Consectetur, autem reiciendis.
              </h6>
            </div>
            <div className="text-center">
              <button onClick={()=> {closeModal(false)}} className="btn btn-success">close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//<div className="container bg-dark position-relative rounded-5  pt-3">

//
//         A
//       </div>
