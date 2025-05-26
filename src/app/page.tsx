import Image from "next/image";
import Navbar from "./Nav/Nav";
import Hero from "./Hero/Hero";
import Work from "./working/Work";
import Article from "./article/Article";
import Blog from "./Blog/Blog";
import Footer from "./footer/Footer";

export default function Home() {
  return (
   <>
   <Navbar />
   <Hero />
   <Work />
   <Article />
   <Blog />
   <Footer/>
   </>
    
   
  );
}
