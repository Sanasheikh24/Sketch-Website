import React from 'react'
import { ReactTyped } from "react-typed";

function banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[50px]'>
      {/* #FCC7FF */}
      {/* #2699fb */}
        <div className='max-w-[1240px] py-[100px] mx-auto text-center'>
            <div className=' text-xl md:text-3xl font-bold md:p-[24px]  '>
              Learn with us
            </div>
            <h2 className='text-white font-bold text-5xl md:text-[60px] md:p-[24px]'>
              Grow With Us.
            </h2>
            <div className=' text-[20px] md:text-[50px]  md:p-[24] text-white font-bold'>
              Learn
               <ReactTyped 
               className='pl-3'
               strings={["Charcoal sketch","Graphite Sketch","Coloured Sketch"]}
                typeSpeed={80}
                loop={true}
                backSpeed={100}
                />

            </div>
            <button className='bg-black text-white p-3 rounded '>
        Get Started
      </button>
            
        </div>
       
      
    </div>
  )
}

export default banner
