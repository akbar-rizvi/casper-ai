import Image from "next/image";
import Navbar from "./Nav/Nav";
import Hero from "./Hero/Hero";
import Footer from "./Business/footer/Footer"


export default function Home() {
  return (
   <>
   <div className="relative ">
    <div className="fixed top-5  left-0 z-20 w-full  "><Navbar /></div>
   <Hero   />
   </div>
   <Footer />
  
   </>
    
   
  );
}
