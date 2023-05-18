'use client'
// import dynamic from "next/dynamic";
// const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
//   ssr: false,
// });
//import "owl.carousel/dist/assets/owl.carousel.css";
//import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "./components/Footer/page";
import Header from "./components/Header/page";


import Home from "./Home/page";



const page = () => {
  return (
    <>
      <Header />
      <Home />
    
      <Footer />
    </>
  )
}

export default page
