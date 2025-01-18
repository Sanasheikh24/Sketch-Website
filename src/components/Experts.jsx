import React from 'react'
// import sketch from "../assets/images/sketch.jpg"
import collage from "../assets/images/collage.jpg"

export default function expert() {
  return (
    <div className='max-w-[1240px] mx-auto   p-1 my-10    md:grid grid-cols-2'> 
    <div className=' col-span-1 md:w-[80%] text-center '>
      <img src={collage} alt="" className='inline' />
    
     </div>
    <div className='  col-span-1 flex flex-col justify-center'> 
      <h1 className='text-[#074799] font-bold my-1 '>
        LEARN With Us
      </h1>
      <p className='my-2 text-justify'>

      </p>
      <p>
      An artist is a creative individual who uses imagination, skill, and various mediums to express ideas, emotions, and perspectives. They often challenge conventional thinking,
       capturing the essence of life, culture, or abstract concepts through their chosen form of art.
       <br/>
       An artist is, above all, a storyteller and innovator, pushing boundaries to explore the limitless possibilities of human creativity.

      </p>
      <button className='w-[30%] bg-black text-white p-3 rounded my-2 '>
        Get Started
      </button>
    </div>
      
    </div>
  )
}


