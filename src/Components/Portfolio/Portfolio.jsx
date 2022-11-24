import React, { useState } from "react";
import cake from "../../img/cake.png";
import style from "./Portfolio.module.css";
import cabin from "../../img/cabin.png";
import circus from "../../img/circus.png";
import game from "../../img/game.png";
import safe from "../../img/safe.png";
import submarine from "../../img/submarine.png";
import Modal from "../Modal/Modal";



export default function Portfolio() {

  const [openModal, setopenModal] = useState(false);


  return (
    <>
      <section id="portfolio">
        <div className="container p-5 ">
            <div className="row gy-4  p-5">
             
                <div className="col-md-4">
                    <div className="">
                       <div onClick={()=>{setopenModal(true)}} className={style.gellary}>
                        <img   src={submarine} alt="cake" />
                       
                       <div className={style.overlay_G}>
                       <i class="fa-solid fa-plus text-white fa-3x display-1"></i>
                       </div>
                       </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="">
                       <div  onClick={()=>{setopenModal(true)}}  className={style.gellary}>
                        <img src={cabin} alt="cake" />
                       
                       <div className={style.overlay_G}>
                       <i class="fa-solid fa-plus text-white fa-3x display-1"></i>
                       </div>
                       </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="">
                       <div  onClick={()=>{setopenModal(true)}} className={style.gellary}>
                        <img src={cake} alt="cake" />
                       
                       <div className={style.overlay_G}>
                       <i class="fa-solid fa-plus text-white fa-3x display-1"></i>
                       </div>
                       </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="">
                       <div onClick={()=>{setopenModal(true)}}  className={style.gellary}>
                        <img src={game} alt="cake" />
                       
                       <div className={style.overlay_G}>
                       <i class="fa-solid fa-plus text-white fa-3x display-1"></i>
                       </div>
                       </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="">
                       <div  onClick={()=>{setopenModal(true)}} className={style.gellary}>
                        <img src={circus} alt="cake" />
                       
                       <div className={style.overlay_G}>
                       <i class="fa-solid fa-plus text-white fa-3x display-1"></i>
                       </div>
                       </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="">
                       <div onClick={()=>{setopenModal(true)}} className={style.gellary}>
                        <img src={safe} alt="cake" />
                       
                       <div className={style.overlay_G}>
                       <i class="fa-solid fa-plus text-white fa-3x display-1"></i>
                       </div>
                       </div>
                    </div>
                </div>
            
                

            </div>
        </div>
      </section>
      {openModal&&<Modal closeModal={setopenModal} />}
    </>
  );
}
