import React from 'react'
import FAQAccordion from './components/FAQAccordion'
import FeaturesSection from './components/FeaturesSection'
import Testimony from './components/Testimony'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <Testimony />
    <FAQAccordion />
    <Footer />
    </>
  )
}

export default App
