import React from "react";
import Navbar from "../Nav/Nav";
import Hero from "../Hero/Hero";
import BuusinessHero from "./businessHero/Hero";

const page = () => {
  return (
    <>
      <div className="relative">
        <div className="fixed top-0 z-50 left-0 z-20 w-full backdrop-blur ">
          <Navbar />
        </div>
        <BuusinessHero />
      </div>
    </>
  );
};

export default page;
