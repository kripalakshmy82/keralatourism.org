'use client'
import Footer from "./components/Footer/page";
import Header from "./components/Header/page";
import NewsLetter from "./components/NewsLetter/page";


import Home from "./Home/page";



const page = () => {
  return (
    <>
      <Header />
      <Home />
    <NewsLetter/>
      <Footer />
    </>
  )
}

export default page
