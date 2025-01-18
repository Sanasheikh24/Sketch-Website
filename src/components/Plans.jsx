import React from 'react'

export default function Plans() {
  return (
    <div className='py-[100px] px-2'>
         <div className=" max-w-[1240px] mx-auto md:grid grid-cols-3 gap-5 text-center ">
           <div className='shadow-xl  h-[500px] my-4 hover:scale-105 duration-500 '>
            <div className=' text-center p-20'>
            <h2 className="text-xl font-bold mb-2">Graphite Potrait</h2>
             <p className="text-4xl font-bold mb-4">$149</p>
            <p className="mb-2">Lorem Ipsum is simply</p>
            <p className="mb-2">Lorem Ipsum is simply dummy text of the printing</p>
            <p className="mb-4">Lorem Ipsum is simply dumm.</p>
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start Trial</button>
            </div>
         </div>

         <div className='shadow-xl  h-[500px] my-4 bg-slate-100 hover:scale-105 duration-500'>
         <div className='border-border-black text-center p-20'>
            <h2 className="text-xl font-bold mb-2">Charcoal Potrait</h2>
             <p className="text-4xl font-bold mb-4">$149</p>
            <p className="mb-2">Lorem Ipsum is simply</p>
            <p className="mb-2">Lorem Ipsum is simply dummy text of the printing</p>
            <p className="mb-4">Lorem Ipsum is simply dumm.</p>
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start Trial</button>
            </div>
            
         </div>
         <div className='shadow-xl  h-[500px] my-4 hover:scale-105 duration-500'>
         <div className='border-border-black text-center p-20'>
            <h2 className="text-xl font-bold mb-2">Coloured Sketch</h2>
             <p className="text-4xl font-bold mb-4">$149</p>
            <p className="mb-2">Lorem Ipsum is simply</p>
            <p className="mb-2">Lorem Ipsum is simply dummy text of the printing</p>
            <p className="mb-4">Lorem Ipsum is simply dumm.</p>
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start Trial</button>
            </div></div> 

        </div>
       
      
    </div>
  )
}
