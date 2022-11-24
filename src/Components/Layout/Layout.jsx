import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"
// import Home from "../Home/Home";
import { Outlet } from "react-router-dom";
import Modal from "../Modal/Modal";



export default function Layout() {
  
  
  
  return  <>

  
  <Navbar/>
  
  <Outlet></Outlet>
  <Footer/>

  
  </>
  
}
