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
   <div className="relative ">
    <div className="fixed top-0  left-0 z-20 w-full backdrop-blur  "><Navbar /></div>
   <Hero   />
   </div>
   <Work />
   <Article />
   <Blog />
   <Footer/>
   </>
    
   
  );
}
