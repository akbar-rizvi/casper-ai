import React from "react";
import Navbar from "../Nav/Nav";
import Hero from "../Hero/Hero";
import BuusinessHero from "./businessHero/Hero";
import Article from "./article/Article";
import Blog from "./Blog/Blog";
import Footer from "./footer/Footer";
import Content from "./Content/Content";
import Work from "./working/Work";

const page = () => {
  return (
    <>
      <div className="relative">
        {/* after scrolling to 80vh show navbar in background black */}

        <div className="fixed top-5 z-50 left-0 z-50 w-full flex justify-center  ">
          <Navbar />
        </div>

        <BuusinessHero />
      </div>
      <Work />
      <Article />
      <Blog />

      <Footer />
    </>
  );
};

export default page;
