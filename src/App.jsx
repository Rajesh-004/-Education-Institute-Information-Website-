import React, { useState } from 'react'
import Navbar from './Componends/Navbar/Navbar'
import Hero from './Componends/Hero/Hero'
import Programs from './Componends/Programs/Programs'
import Title from './Componends/Title/Title'
import About from './Componends/About/About'
import Campus from './Componends/Campus/Campus'
import Testimonials from './Componends/Testimonials/Testimonials'
import Contact from './Componends/Contact/Contact'
import Footer from './Componends/Footer/Footer'
import VideoPlayer from './Componends/VideoPlayer/VideoPlayer'
const App = () => {

  const [playState, setplayState] = useState(false);


  return (
    <div>
        <Navbar/>
         <Hero/>
         <div className="container">
          <Title subTitle='Our program' title='What We Offer'/>
         <Programs/>
         <About setplayState={setplayState} />
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setplayState={setplayState}/>
    </div>
  )
}

export default App