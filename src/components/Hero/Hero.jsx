import React, { useEffect } from 'react'
import './Hero.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {

    useEffect(() => {
        AOS.init({
          duration: 3000, 
          once: false,     
        });
      }, []);
    


  return (
    <>
    <section>
        <div className="container">
        <div className="wrap">
                <div data-aos="flip-right" data-aos-delay="100" className="box"></div>
                <div data-aos="flip-up" data-aos-delay="200" className="box"></div>
                <div data-aos="flip-left" data-aos-delay="300" className="box"></div>
            </div>
            <div className="wrap">
                <div data-aos="flip-right" data-aos-delay="400" className="box"></div>
                <div data-aos="flip-down" data-aos-delay="500" className="box"></div>
                <div data-aos="flip-left" data-aos-delay="600" className="box"></div>
            </div>
            <div className="wrap">
                <div data-aos="flip-right" data-aos-delay="700" className="box"></div>
                <div data-aos="flip-up" data-aos-delay="800" className="box"></div>
                <div data-aos="flip-left" data-aos-delay="900" className="box"></div>
            </div>
            <div className="wrap">
            <div data-aos="flip-right" data-aos-delay="1000" className="box"></div>
                <div data-aos="flip-down" data-aos-delay="1100" className="box"></div>
                <div data-aos="flip-left" data-aos-delay="1200" className="box"></div>
            </div>
            <div className="wrap">
                <div data-aos="flip-right" data-aos-delay="1300" className="box"></div>
                <div data-aos="flip-up" data-aos-delay="1400" className="box"></div>
                <div data-aos="flip-left" data-aos-delay="1500" className="box"></div>
            </div>
            <div className="wrap">
                <div data-aos="flip-right" data-aos-delay="1600" className="box"></div>
                <div data-aos="flip-down" data-aos-delay="1700" className="box"></div>
                <div data-aos="flip-left" data-aos-delay="1800" className="box"></div>
            </div>
            

        </div>
    </section>
    </>
  )
}

export default Hero