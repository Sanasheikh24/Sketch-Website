import React from 'react'

export default function NewsLetter() {
  return (
    <div className='bg-[#2699fb] p-4  '>
       <div className=' max-w-[1240px] mx-auto md:flex justify-betweeen py-[50px] gap-60'>
            <div  className='m-2'>
               <h1 className=' text-[20px] md:text-[35px] font-bold text-white'> Want to learn  Charcoal Sketch</h1>
               <span className='text-white'>
                Sign up to our newsletter and stay up to date.
               </span>
            </div>
            <div  className=' m-2'> 
                <input type="text" className=' sm:w-full rounded  mb-2 p-3 mr-2 text-slate-600' placeholder='Email'/>
                <button className='bg-black text-white p-3 rounded '>Get Started </button>
                <br/>
                <p className='text-white'>
                    We care about the protection of your Data. Read our <br/> Privacy Policy.
                </p>
            </div>

        </div>
        
      
    </div>
  )
}
