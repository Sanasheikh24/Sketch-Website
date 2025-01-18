import React from 'react'
import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";
import { useState} from 'react'

export default function Header() {
    const [toggle,setToggle] = useState(false);
    return(
        
        <div className='bg-[#1A1A1D] p-4'>
            {/* #B16C85 */}
            {/* #131010 */}
            {/* bg-[#2699fb] */}
            {/* #074799 */}
            <div className='max-w-[1240px]  py-[12px] items-center  flex  justify-between  mx-auto'> 
                <div className='text-3xl font-bold text-white '>
                    Sheikh's Gallery
                </div>
                { 
                    toggle ?
                        <AiOutlineClose  onClick={()=>setToggle(!toggle)} className='text-white text-2xl
                         md:hidden block'  />
                        :
                        <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl
                          md:hidden block' />


                }

                <ul className=' hidden md:flex text-white gap-10 '>
                    <li>
                        Home
                    </li>
                    <li>Company

                    </li>
                    <li>Resources

                    </li>
                    <li>
                        About

                    </li>
                    <li>Contact

                    </li>
                </ul>
                {/* responsive menu*/}
                <ul className={`duration-300  md:hidden w-full h-screen text-white fixed bg-black top-[95px] 
                       ${toggle ?  'left-[0]' : 'left-[-100%]' } 
                        ` }>
                    <li className='p-4'>
                        Home
                    </li>
                    <li className='p-4'>Company

                    </li>
                    <li className='p-4'>Resources

                    </li>
                    <li className='p-4'>
                        About

                    </li>
                    <li className='p-4'>Contact

                    </li>
                </ul>
            </div>
            
         </div>
       
    )
}