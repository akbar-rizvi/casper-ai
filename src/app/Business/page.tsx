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
      <Navbar />

      <BuusinessHero />

      <Work />
      <Article />
      <Blog />

      <Footer />
    </>
  );
};

export default page;
