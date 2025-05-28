import React from "react";
import Navbar from "../Nav/Nav";
import Hero from "../Hero/Hero";
import BuusinessHero from "./businessHero/Hero";
import Content from "./Content/Content";

import Agent from "./Agent/Agent";


const page = () => {
  return (
    <>
      <div className="relative">
        <div className="fixed top-0 z-50 left-0 z-20 w-full  ">
          <Navbar />
          
        </div>
         
            <BuusinessHero />
        
       
      </div>
      <Content/>
      <Agent />
      

    </>
  );
};

export default page;
