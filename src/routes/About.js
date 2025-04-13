import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="~$ whoami"
        text="Just a 15-year-old dev who turned curiosity into code. Here's the story beneath the stack."
      />
      <Footer />
    </div>
  )
}

export default About