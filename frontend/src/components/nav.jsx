import React from 'react'
import logo from '../uploads/logo.png' 
import { NavLink ,Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='h-[7rem]  items-center  justify-between   bg-[rgb(10,87,154)] flex  '> 
   


     <img src={logo} alt='' className='h-[95%]   ml-[1rem]' /> 
       
    <ul className="flex gap-[5rem] text-xl font-bold  text-white p-[0.50rem]  ">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/Tax_payment">Tax_payment</NavLink></li>
    <li><NavLink to="/Details">Details</NavLink></li>
  
    <li><NavLink to="/About">About</NavLink></li>

           
       
          </ul> <div className='text-[rgb(10,87,154)] text-4xl'>.</div> 
         

         
        </nav> 

  )
}

export default Nav