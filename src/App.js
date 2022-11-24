import "./App.css";



// import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";



let routers = createBrowserRouter([

  {path:'/', element:<Layout/>,children:[
    
    {path:'/portfolio', element:<Portfolio/>},
    {path:'/about', element:<About/>},
    {path:'/contact', element:<Contact/>},
    {index:true, element:<Home/>},

  ]}
])
function App() {
  return <RouterProvider router={routers}/>
    
  
}

export default App;
